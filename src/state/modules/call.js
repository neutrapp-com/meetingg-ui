import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    displayChat: false,
    participants: data.call.participants,
    viewers: data.call.viewers

}

export const mutations = {
    TOGGLE_CHAT(state) {
        state.displayChat = !state.displayChat;
    },
}

export const getters = {
    getIsChatDisplayed(state) {
        return state.displayChat;
    },

    getParticipants(state) {
        return state.participants;
    },

    getViewers(state) {
        return state.viewers;
    }
}

export const actions = {

    toggleChat({ commit }) {
        commit('TOGGLE_CHAT');
    },
}
