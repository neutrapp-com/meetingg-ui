import axios from 'axios'

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
        data.forEach(d => {
            state.messages[d.id] = [];
        })
    },
    SET_MESSAGES_LIST(state, { messages, discussionId }) {
        if (!state.messages[discussionId]) {
            state.messages[discussionId] = []
        }
        state.messages[discussionId] = messages;
    },
    PUSH_NEW_MESSAGE(state, { message, discussionId }) {
        if (!state.messages[discussionId]) {
            state.messages[discussionId] = []
        }

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
                const data = response.data
                commit('PUSH_NEW_MESSAGE', { message: data.row, discussionId: state.selected.id })
                return data
            })
    },

    fetchDiscussions({ commit }) {
        return axios
            .get('/api/discussion/my')
            .then(response => {
                const discussions = response.data.rows;
                if (!discussions || discussions.length === 0) return;
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
                if (!messages || messages.length === 0) return;
                let columns = messages.columns;
                commit('SET_MESSAGES_LIST', {
                    messages: messages.rows.map(row => {
                        let item = {};
                        columns.forEach((key, index) => {
                            item[key] = row[index];
                        });
                        return item;
                    }).sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)), discussionId: state.selected.id
                });
            })
    }
}
