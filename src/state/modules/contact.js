import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    groups: data.contact.groups.map(group => { return { ...group, contacts: data.contact.contacts.filter(contact => contact.group_id == group.id).map((contact, id) => { return { ...contact, id: id } }) } })
}

export const mutations = {
    SET_SELECTED_CONTACT(state, data) {
        state.selected = data;
    },
}

export const getters = {
    getGroups(state) {
        return state.groups
    },
    getSelectedContact(state) {
        return state.selected
    },
}

export const actions = {

    selectContact({ commit }, data) {
        commit('SET_SELECTED_CONTACT', data);
    },
}
