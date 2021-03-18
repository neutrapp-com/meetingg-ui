
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
        commit('discussion/SET_SELECTED_DISCUSSION', data.discussion, { root: true })
    }
}
