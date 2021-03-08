
const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        icon: 'log-in-outline',
        component: () => import('./views/pages/auth/login'),
    },
    {
        path: '/register',
        name: 'Register',
        icon: 'log-in-outline',
        component: () => import('./views/pages/auth/register'),
    },
    {
        path: '/forget',
        name: 'Password Forget',
        icon: 'log-in-outline',
        component: () => import('./views/pages/auth/pass-forget'),
    },
]

const errorPagesRoutes = [
    {
        path: '/404',
        name: '404 error',
        icon: 'log-in-outline',
        component: () => import('./views/pages/error/404'),
    },
    {
        path: '/500',
        name: '500 error',
        icon: 'log-in-outline',
        component: () => import('./views/pages/error/500'),
    },
]

const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        header: 'Navigation',
        icon: 'home',
        component: () => import('./views/pages/dashboard/dashboard'),
    },
]

const allRoutes = [...authRoutes, ...errorPagesRoutes, ...dashboardRoutes];

export default allRoutes;

