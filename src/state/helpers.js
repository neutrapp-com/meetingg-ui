import { mapState, mapGetters, mapActions } from 'vuex'

/**
 * App Configs
 */
export const appComputed = {
    ...mapGetters('app', ['getApp'])
}

/**
 * Layouts
 */
export const layoutComputed = {
    ...mapState('layout', {
        layoutType: (state) => state.layoutType,
        leftSidebarTheme: (state) => state.leftSidebarTheme,
        leftSidebarType: (state) => state.leftSidebarType,
        layoutWidth: (state) => state.layoutWidth,
    }),
}

/**
 * Auth
 */

export const authComputed = {
    ...mapState('auth', {
        currentUser: (state) => state.currentUser,
    }),
    ...mapGetters('auth', ['loggedIn', 'getName', 'getAvatar', 'getDefaultAvatar']),
}

export const authMethods = mapActions('auth', [
    'logIn',
    'logOut',
    'register',
    'resetPassword',
])


export default authMethods;