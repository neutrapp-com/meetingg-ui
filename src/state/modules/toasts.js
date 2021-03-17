export const state = {
    list: []
}

export const mutations = {
    DROP_TOAST(state, id) {
        state.list = (state.list || []).filter(alert => alert.id !== id);
    },
    ADD_TOAST(state, fields) {
        state.list.push({
            id: fields.id || Date.now(),
            title: fields.title,
            content: fields.content,
            ...fields
        })
    }
}

export const getters = {
    getToasts(state) {
        return state.list || [];
    },
}

export const actions = {
    dropToast({ commit }, id) {
        commit('DROP_TOAST', id);
    },
    addToast({ commit }, data) {
        commit('ADD_TOAST', data);
    },
}
