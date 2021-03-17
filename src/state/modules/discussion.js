import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    discussions: [],
}

export const mutations = {
    SET_SELECTED_DISCUSSION(state, data) {
        state.selected = data;
    },
    SET_DISCUSSION_LIST(state, data) {
        state.discussions = data;
    }
}

export const getters = {
    getDiscussions(state) {
        return state.list
    },
    getSelectedDiscussion(state) {
        return state.selected
    },
}

export const actions = {

    selectDiscussion({ commit }, data) {
        commit('SET_SELECTED_DISCUSSION', data);
    },

    fetchDiscussions({ commit }) {
        return axios
            .get('/api/discussion/my')
            .then(response => {
                const discussions = response.data.rows;
                let columns = discussions.columns;
                commit('SET_DISCUSSION_LIST', discussions.rows.map(row => {
                    let item = {};
                    columns.forEach((key, index) => {
                        item[key] = row[index];
                    });
                    return item;
                }));
            })
    }
}
