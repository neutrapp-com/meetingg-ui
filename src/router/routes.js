
const authRoutes = [

]

const errorPagesRoutes = [

]

const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        header: 'Navigation',
        icon: 'home',
        component: () => import('./views/pages/dashboard'),
    },
]

const allRoutes = [...authRoutes, ...errorPagesRoutes, ...dashboardRoutes];

export default allRoutes;

