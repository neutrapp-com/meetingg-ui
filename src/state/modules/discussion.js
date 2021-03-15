import router from '../../router'
import axios from 'axios'
import data from '../data.test.json'

export const state = {
    selected: null,
    list: data.discussion.list
}

export const mutations = {
    SET_SELECTED_DISCUSSION(state, data) {
        state.selected = data;
    },
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
}
