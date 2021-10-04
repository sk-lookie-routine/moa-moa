import { createRouter, createWebHistory } from "vue-router";
import AuthForm from "../pages/AuthForm.vue";
import AuthPage from "../pages/AuthPage.vue";
import Home from "../pages/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: AuthPage,
        },
        {
            path: '/signup',
            component: AuthForm,
        },
    ],
});

export default router;
