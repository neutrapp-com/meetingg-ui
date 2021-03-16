import axios from 'axios'

export const state = {
    list: []
}

export const mutations = {
    SET_NOTIFICATIONS_LIST(state, data) {
        state.list = data || [];
    },
}

export const getters = {
    getNotifications(state) {
        return state.list;
    }
}

export const actions = {
    fetchNotification({ commit }) {
        return axios
            .get('/api/notification/my')
            .then(response => {
                const notification = response.data
                commit('SET_NOTIFICATIONS_LIST', notification.rows);
            })
    },
}
