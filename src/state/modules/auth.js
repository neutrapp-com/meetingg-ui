import axios from 'axios'
import router from '@/router'
import jwtDecode from 'jwt-decode'


export const state = {
    user: getSavedState('auth.user'),
    registered: {
        email: null
    }
}

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.user = newValue
        saveState('auth.user', newValue)
        setDefaultAuthHeaders(state)
    },
}

export const getters = {
    loggedIn(state) {
        return !!state.user
    },
    tokenExpired(state) {
        try {
            return !state.user.token || (() => {
                let dt = jwtDecode(state.user.token);
                return !dt || dt.exp >= (Date.now() - 3600 * 1000) / 1000;
            })(state);
        } catch (e) {
            // jwtDecode failed
            console.warn(e);
        }
        return true;
    }
}

export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    init({ state, dispatch }) {
        console.log('init auth');
        setDefaultAuthHeaders(state)
        dispatch('validate')
    },

    // Logs in the current user.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return axios
            .post('/api/auth/login', { email, password })
            .then((response) => {
                const user = response.data
                commit('SET_CURRENT_USER', user)
                return user
            })
    },

    // Logs out the current user.
    logOut({ commit }) {
        commit('SET_CURRENT_USER', null)
    },
    // register the user
    // eslint-disable-next-line no-unused-vars
    register({ dispatch, getters }, data) {
        if (getters.loggedIn) return dispatch('validate')

        return axios
            .post('/api/auth/register', data)
            .then((response) => {
                const user = response.data
                return user
            })
    },

    // register the user
    resetPassword({ dispatch, getters }, { email } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return axios.post('/api/auth/reset', { email }).then((response) => {
            const message = response.data
            return message
        })
    },

    // Validates the current user's token and refreshes it
    // with new data from the API.
    validate({ commit, state }) {
        if (!state.user) return Promise.resolve(null)

        return getters.tokenExpired(state) ? axios
            .get('/api/auth/session')
            .then((response) => {
                const user = response.data.session
                commit('SET_CURRENT_USER', user)
                return user
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    commit('SET_CURRENT_USER', null)
                } else {
                    // commit('toasts/ADD_TOAST', {
                    //     title: 'Server Down',
                    //     content: error.response.data.message ? error.response.data.message : "Server down ... retry"
                    // }, { root: true })
                }

                router.push('/api/500');
                return true;
            }) : new Promise(resolve => resolve(state.user))
    },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
    if (window.localStorage.getItem(key) === 'undefined') {
        return undefined;
    }
    return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
    axios.defaults.headers.common.Authorization = state.user
        ? `Bearer ${state.user.token}`
        : ''
}
