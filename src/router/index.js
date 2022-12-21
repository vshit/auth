import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/auth",
        name: "Auth",

        component: () => import(/* webpackChunkName: "about" */ "../views/Auth.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
