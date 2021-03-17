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
    }
}

export const getters = {
    getGroups(state) {
        let groups = []
        let contacts = state.contacts
        groups = state.groups.map(group => {
            contacts = contacts.filter(contact => {
                return group.contacts.find(g => g.id == contact.id) === undefined
            })
            group.contacts = contacts.filter(contact => {
                return group.contacts.find(g => g.id == contact.id)
            })
            return group
        })
        groups.push({
            id: -1,
            title: "Others",
            count: contacts.length,
            contacts: contacts
        })
        return groups
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

    searchContact({ commit }, data) {
        return axios
            .post('/api/profile/search', data)
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
                let columns = contacts.columns;
                commit('SET_CONTACT_LIST', contacts.rows.map(row => {
                    let item = {};
                    columns.forEach((key, index) => {
                        item[key] = row[index];
                    });
                    return item;
                }));
            })
    }
}
