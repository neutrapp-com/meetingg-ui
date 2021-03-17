import axios from 'axios'
import { list } from 'postcss';
import data from '../data.test.js'

export const state = {
    selected: null,
    list: data.meetings.list,
}

export const mutations = {
    SET_SELECTED_MEETING(state, data) {
        state.selected = data;
    },
    SET_MEETINGS_LIST(state, data) {
        state.list = data;
    }
}

export const getters = {
    getMeetings(state) {
        return state.list
    },
    getSelectedMeeting(state) {
        return state.selected
    },
}

export const actions = {

    selectMeeting({ commit }, data) {
        commit('SET_SELECTED_MEETING', data);
    },

    unselectMeeting({ commit }) {
        commit('SET_SELECTED_MEETING', null);
    },

    newMeeting({ commit, dispatch, getters }, data) {
        return axios
            .post('/api/meeting/new', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    fetchMeetings({ commit }) {
        return axios
            .get('/api/meeting/my')
            .then(response => {
                const meetings = response.data.rows;
                if (!meetings) return;
                let columns = meetings.columns;
                commit('SET_MEETINGS_LIST', meetings.rows.map(row => {
                    let item = {};
                    columns.forEach((key, index) => {
                        item[key] = row[index];
                    });
                    return item;
                }));
            })
    },

}
