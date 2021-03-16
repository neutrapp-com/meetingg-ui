import router from '../../router'
import axios from 'axios'
import data from '../data.test.js'

export const state = {
    selected: null,
    list: [
        {
            id: 1,
            title: "Reunion1", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
        },
        {
            id: 2,
            title: "Reunion 2", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
        },
        {
            id: 3,
            title: "Reunion 3", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
        },
        {
            id: 4,
            title: "Reunion 4", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
        }
    ],
}

export const mutations = {
    SET_SELECTED_MEETING(state, data) {
        state.selected = data;
    },
}

export const getters = {
    getMeetings(state) {
        return state.list
    },
    getSelectedMeeting(state) {
        return state.selected
    },
}

export const actions = {

    selectMeeting({ commit }, data) {
        commit('SET_SELECTED_MEETING', data);
    },

    newMeeting({ commit, dispatch, getters }, data) {
        console.log(data)
        return axios
            .post('/api/meeting/new', data)
            .then((response) => {
                const user = response.data
                return user
            })
    }
}
