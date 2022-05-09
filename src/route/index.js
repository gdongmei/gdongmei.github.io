import { createRouter, createWebHistory } from "vue-router";

const PageAbout = () => import("../components/PageAbout");
const PageHome = () => import("../components/PageHome");
const ProjectCook = () => import("../components/PageProjectCook");

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/about",
            name: "about",
            component: PageAbout
        },
        {
            path: "/",
            name: "home",
            component: PageHome
        },
        {
            path: "/cook-it",
            name: "cookProject",
            component: ProjectCook
        }
    ]
});

export default router;