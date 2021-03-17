import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    discussions: [],
    messages: {},
}

export const mutations = {
    SET_SELECTED_DISCUSSION(state, data) {
        state.selected = data;
        state.messages[data.id] = []
    },
    SET_DISCUSSION_LIST(state, data) {
        state.discussions = data;
    },
    SET_MESSAGES_LIST(state, { messages, discussionId }) {
        state.messages[discussionId] = messages;
    },
    SET_LAST_MESSAGE(state, { message, discussionId }) {
        state.messages[discussionId].push(message)
    }
}

export const getters = {
    getDiscussions(state) {
        return state.discussions
    },
    getMessages(state) {
        return state.messages[state.selected.id]
    },
    getSelectedDiscussion(state) {
        return state.selected
    },
}

export const actions = {

    selectDiscussion({ commit, state }, data) {
        commit('SET_SELECTED_DISCUSSION', data);
    },


    sendMessage({ commit, state }, data) {

        return axios
            .post('/api/message/' + state.selected.id, data)
            .then((response) => {
                const message = response.data
                commit('SET_LAST_MESSAGE', { message: message, discussionId: state.selected.id })
                return message
            })
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
    },

    fetchMessages({ commit, state }) {
        return axios
            .get('/api/discussion/' + state.selected.id + '/messages')
            .then(response => {
                const messages = response.data.rows;
                let columns = messages.columns;
                commit('SET_MESSAGES_LIST', {
                    messages: messages.rows.map(row => {
                        let item = {};
                        columns.forEach((key, index) => {
                            item[key] = row[index];
                        });
                        return item;
                    }), discussionId: state.selected.id
                });
            })
    }
}
