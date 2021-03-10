
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
        header: 'Navigation',
        component: () => import('./views/pages/dashboard/Dashboard'),
    },
].map(route => {
    return {
        ...route,
        meta: {
            layout: 'Authentified'
        }
    }
});

const allRoutes = [...authRoutes, ...errorPagesRoutes, ...dashboardRoutes];

export default allRoutes;

