import { createRouter, createWebHistory } from "vue-router";
import AuthSignupForm from "../pages/AuthSignupForm.vue";
import AuthSignupPage from "../pages/AuthSignupPage.vue";
import AuthLoginPage from '../pages/AuthLoginPage.vue';
import Home from "../pages/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/signup',
            component: AuthSignupPage,
        },
        {
            path: '/signup-form',
            component: AuthSignupForm,
        },
        {
            path: '/login',
            component: AuthLoginPage,
        }
    ],
});

export default router;
