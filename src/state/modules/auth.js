import axios from 'axios'
import router from '@/router'
import jwtDecode from 'jwt-decode'


export const state = {
    session: getSavedState('auth.session'),
    registered: {
        email: null
    }
}

export const mutations = {
    SET_CURRENT_SESSION(state, newValue) {
        state.session = newValue
        saveState('auth.session', newValue)
        setDefaultAuthHeaders(state)
    },
}

export const getters = {
    loggedIn(state) {
        return !!state.session
    },
    tokenExpired(state) {
        if (!state.session || !state.session.token) return true;

        try {
            let dt = jwtDecode(state.session.token);
            let expired = dt.exp - (Date.now() - 3600 * 1000) / 1000 <= 0;
            console.log(dt, expired);

            return expired;
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

    // Logs in the current session.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return axios
            .post('/api/auth/login', { email, password })
            .then((response) => {
                const session = response.data.session
                const profile = response.data.profile
                commit('SET_CURRENT_SESSION', session)
                commit('profile/SET_PROFILE', profile, { root: true });
                return session
            })
    },

    // Logs out the current session.
    logOut({ commit }) {
        commit('SET_CURRENT_SESSION', null)
    },
    // register the session
    // eslint-disable-next-line no-unused-vars
    register({ dispatch, getters }, data) {
        if (getters.loggedIn) return dispatch('validate')

        return axios
            .post('/api/auth/register', data)
            .then((response) => {
                const session = response.data
                return session
            })
    },

    // register the session
    resetPassword({ dispatch, getters }, { email } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return axios.post('/api/auth/reset', { email }).then((response) => {
            const message = response.data
            return message
        })
    },

    // Validates the current session's token and refreshes it
    // with new data from the API.
    validate({ dispatch, commit, state }) {
        setDefaultAuthHeaders(state)
        if (!state.session) return Promise.resolve(null)

        return getters.tokenExpired(state) ? axios
            .get('/api/auth/session')
            .then((response) => {
                const session = response.data.session
                const profile = response.data.profile
                commit('SET_CURRENT_SESSION', session)


                commit('profile/SET_PROFILE', profile, { root: true });
                return session
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    commit('SET_CURRENT_SESSION', null)
                } else {
                    commit('toasts/ADD_TOAST', {
                        title: 'Server Down',
                        content: error.response.data.message ? error.response.data.message : "Server down ... retry"
                    }, { root: true })
                }

                router.push({ name: '/500' });
                return true;
            }) : new Promise(resolve => resolve(state.session))
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
    axios.defaults.headers.common.Authorization = state.session
        ? `Bearer ${state.session.token}`
        : ''
}
