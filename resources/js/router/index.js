import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import NotFound from "../components/NotFound.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/:pathMatch(.*)",
        name: "notFound",
        component: NotFound
    }
];