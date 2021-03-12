
const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/pages/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./views/pages/auth/Register.vue'),
    },
    {
        path: '/forget',
        name: 'Password Forget',
        component: () => import('./views/pages/auth/ForgotPassword.vue'),
    },
].map(route => {
    return {
        ...route,
        meta: {
            layout: 'Authentification',
        }
    }
});

const errorPagesRoutes = [
    {
        path: '/404',
        name: '404 error',
        component: () => import('./views/pages/error/404.vue'),
    },
    {
        path: '/500',
        name: '500 error',
        component: () => import('./views/pages/error/500.vue'),
    },
]

const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: 'home',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard.vue'),
    },
    {
        path: '/chat',
        name: 'Chat',
        icon: 'chatbox-ellipses',
        menu: true,
        component: () => import('./views/pages/dashboard/Chat.vue'),
    },
    {
        path: '/meetings',
        name: 'Meetings',
        icon: 'time',
        menu: true,
        component: () => import('./views/pages/dashboard/Meeting.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        icon: 'person-circle',
        menu: true,
        component: () => import('./views/pages/dashboard/Contact.vue'),
    },
    {
        path: '/shedule',
        name: 'Shedule',
        icon: 'calendar',
        menu: true,
        component: () => import('./views/pages/dashboard/Shedule.vue'),
    },
    {
        path: '/profile/settings',
        name: 'Settings',
        menu: false,
        component: () => import('./views/pages/dashboard/Dashboard.vue'),
    },
].map(route => {
    return {
        ...route,
        meta: {
            layout: 'Authentified',
            menu: route.meta && route.meta.menu && true || false
        }
    }
});

const dashboardMenu = dashboardRoutes.filter(route => true === route.menu);

const callRoutes = [
    {
        path: '/call',
        name: 'Call',
        icon: 'call',
        menu: true,
        component: () => import('./views/pages/dashboard/Call.vue'),
    },
].map(route => {
    return {
        ...route,
        meta: {
            layout: 'Authentified',
            menu: route.meta && route.meta.menu && true || false
        }
    }
});

const allRoutes = [...authRoutes, ...errorPagesRoutes, ...dashboardRoutes, ...callRoutes];

export default allRoutes;
export { allRoutes, dashboardMenu };

