import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    groups: [],
    contacts: [],
}

export const mutations = {
    SET_SELECTED_CONTACT(state, data) {
        state.selected = data;
    },
    SET_CONTACT_LIST(state, data) {
        state.contacts = data;
    },
    ADD_CONTACT_TO_LIST(state, data) {
        state.contacts.push(data);
    },
    SET_GROUP_LIST(state, data) {
        state.groups = data
    }
}

export const getters = {
    getGroups(state) {
        return state.groups
    },
    getSelectedContact(state) {
        return state.selected
    },
    getContacts(state) {
        return state.contacts
    }
}

export const actions = {

    selectContact({ commit }, data) {
        commit('SET_SELECTED_CONTACT', data);
    },

    unselectContact({ commit }) {
        commit('SET_SELECTED_CONTACT', null);
    },

    searchContact({ commit }, data) {
        return axios
            .post('/api/profile/search', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    addContact({ commit }, data) {
        return axios
            .post('/api/contact/new', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    updateGroup({ commit }, { data, group_id }) {
        return axios
            .post('/api/group/' + group_id + '/update', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    addGroup({ commit }, data) {
        return axios
            .post('/api/group/new', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    deleteContact({ commit, state }, data) {
        return axios
            .post('/api/contact/' + state.selected.id + '/delete', data)
            .then((response) => {
                const row = response.data
                return row
            })
    },

    fetchContacts({ commit }) {
        return axios
            .get('/api/contact/my')
            .then(response => {
                const contacts = response.data.rows;
                if (!contacts || contacts.length === 0) return;
                let columns = contacts.columns;
                commit('SET_CONTACT_LIST', contacts.rows.map(row => {
                    let item = {};
                    columns.forEach((key, index) => {
                        item[key] = row[index];
                    });
                    return item;
                }));
            })
    },

    fetchGroups({ commit }) {
        return axios
            .get('/api/group/my')
            .then(response => {
                const groups = response.data.rows;
                commit('SET_GROUP_LIST', response.data.rows);
            })
    }
}
