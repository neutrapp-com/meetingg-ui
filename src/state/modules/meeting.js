import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    list: data.meetings.list,
}

export const mutations = {
    SET_SELECTED_MEETING(state, data) {
        state.selected = data;
    },
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
        console.log(data)
        return axios
            .post('/api/meeting/new', data)
            .then((response) => {
                const user = response.data
                return user
            })
    }
}
