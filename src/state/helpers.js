import { mapState, mapGetters, mapActions } from 'vuex'

/**
 * App Configs
 */
const appComputed = {
    ...mapGetters('app', ['getApp'])
}

/**
 * Layouts
 */
const layoutComputed = {
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

const authComputed = {
    ...mapState('auth', {
        currentUser: (state) => state.currentUser,
    }),
    ...mapGetters('auth', ['loggedIn', 'getName', 'getAvatar', 'getDefaultAvatar']),
}

const authMethods = mapActions('auth', [
    'logIn',
    'logOut',
    'register',
    'resetPassword',
])

/**
 * Contact
 */

const contactMethods = mapActions('contact', [
    'selectContact'
]);

const contactComputed = mapGetters('contact', [
    'getGroups',
    'getSelectedContact',
]);

/**
 * Meeting
 */

const meetingMethods = mapActions('meeting', [
    'selectMeeting',
    'newMeeting'
]);

const meetingComputed = mapGetters('meeting', [
    'getMeetings',
    'getSelectedMeeting',
]);

/**
 * Discussion
 */

const discussionMethods = mapActions('discussion', [
    'selectDiscussion'
]);

const discussionComputed = mapGetters('discussion', [
    'getDiscussions',
    'getSelectedDiscussion',
]);

/**
 * Profile
 */
const profileComputed = mapGetters('profile', [
    'getAvatar'
]);


/**
 * Notification
 */
const notificationMethods = mapActions('notification', [
    'fetchNotification'
]);

const notificationComputed = mapGetters('notification', [
    'getNotifications'
]);

export { authMethods, profileComputed, notificationComputed, notificationMethods, contactComputed, contactMethods, appComputed, layoutComputed, authComputed, meetingMethods, meetingComputed, discussionMethods, discussionComputed };
