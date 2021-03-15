export const state = {
    theme: 'dark'
}

export const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.setItem('theme', theme);
    }
}

export const actions = {
    initTheme({ commit }) {

        const cachedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : false;
        //  `true` if the user has set theme to `dark` on browser/OS
        // const userPrefersLight = !window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (cachedTheme)
            commit('SET_THEME', cachedTheme)
        // else if (userPrefersLight)
        //     commit('SET_THEME', 'light')
        else
            commit('SET_THEME', 'dark')

    },
    toggleTheme({ commit }) {

        switch (localStorage.theme) {
            case 'dark':
                commit('SET_THEME', 'light')
                break;

            default:
                commit('SET_THEME', 'dark')
                break;
        }
    }
}

export const getters = {
    getTheme: (state) => {
        return state.theme;
    },
    isNightMode: (state) => {
        return state.theme === 'dark';
    }
}