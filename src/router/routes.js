
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
]

const errorPagesRoutes = [
    {
        path: '/404',
        name: '404 error',
        component: () => import('./views/pages/error/404'),
    },
    {
        path: '/500',
        name: '500 error',
        component: () => import('./views/pages/error/500'),
    },
]

const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: 'home',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
    {
        path: '/chat',
        name: 'Chat',
        icon: 'chatbox-ellipses',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
    {
        path: '/meetings',
        name: 'Meetings',
        icon: 'time',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
    {
        path: '/contact',
        name: 'Contact',
        icon: 'person-circle',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
    {
        path: '/shedule',
        name: 'Shedule',
        icon: 'calendar',
        menu: true,
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
    {
        path: '/profile/settings',
        name: 'Settings',
        menu: false,
        component: () => import('./views/pages/dashboard/Dashboard'),
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

const allRoutes = [...authRoutes, ...errorPagesRoutes, ...dashboardRoutes];

export default allRoutes;
export { allRoutes, dashboardMenu };

