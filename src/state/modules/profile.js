import axios from 'axios'
import { getAvatar } from '@/utils/avatar'

export const state = {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    avatar: null,
    created_at: null,
    updated_at: null,
}

export const mutations = {
    SET_PROFILE(state, data) {
        Object.keys(data).forEach(key => state[key] = data[key]);
    },
}

export const getters = {
    getProfile(state) {
        return state
    },
    getAvatar(state) {
        return getAvatar(state);
    }
}

export const actions = {
    fetchProfile({ commit }) {
        return axios
            .get('/api/profile/me')
            .then(response => {
                const profile = response.data
                commit('SET_PROFILE', profile.data);
            })
    },
}
