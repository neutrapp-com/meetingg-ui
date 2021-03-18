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
    ...mapGetters('auth',
        [
            'loggedIn',
            'getToken'
        ]),
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
    'selectContact',
    'unselectContact',
    'fetchContacts',
    'addContact',
    'deleteContact',
    'searchContact',
    'selectContact',
]);

const contactComputed = mapGetters('contact', [
    'getGroups',
    'getContacts',
    'getSelectedContact',
]);

/**
 * Meeting
 */

const meetingMethods = mapActions('meeting', [
    'selectMeeting',
    'unselectMeeting',
    'newMeeting',
    'deleteMeeting',
    'fetchMeetings'
]);

const meetingComputed = mapGetters('meeting', [
    'getMeetings',
    'getSelectedMeeting',
]);

/**
 * Discussion
 */

const discussionMethods = mapActions('discussion', [
    'selectDiscussion',
    'sendMessage',
    'fetchDiscussions',
    'fetchMessages'
]);

const discussionComputed = mapGetters('discussion', [
    'getDiscussions',
    'getMessages',
    'getSelectedDiscussion',
]);

/**
 * Theme
 */

const themeMethods = mapActions('theme', [
    'initTheme',
    'toggleTheme'
]);

const themeComputed = mapGetters('theme', [
    'getTheme',
    'isNightMode',
]);


/**
 * Profile
 */
const profileComputed = mapGetters('profile', [
    'getAvatar',
    'getProfile'
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

/**
 * Call
 */
const callMethods = mapActions('call', [
    'toggleChat',
    'setMeeting'
]);

const callComputed = mapGetters('call', [
    'getIsChatDisplayed',
    'getMeeting'
]);

export { themeMethods, themeComputed, callMethods, callComputed, authMethods, profileComputed, notificationComputed, notificationMethods, contactComputed, contactMethods, appComputed, layoutComputed, authComputed, meetingMethods, meetingComputed, discussionMethods, discussionComputed };
