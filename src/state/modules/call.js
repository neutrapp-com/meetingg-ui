import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    displayChat: false,
    meeting: null,
    discussion: null,
}

export const mutations = {
    TOGGLE_CHAT(state) {
        state.displayChat = !state.displayChat;
    },
    SET_MEETING(state, data) {
        state.meeting = data
    }
}

export const getters = {
    getIsChatDisplayed(state) {
        return state.displayChat;
    },
    getMeeting(state) {
        return state.meeting;
    },
}

export const actions = {

    toggleChat({ commit }) {
        commit('TOGGLE_CHAT');
    },

    setMeeting({ commit }, data) {
        commit('SET_MEETING', data)
    }
}
