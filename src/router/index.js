// createWebHistory build之后可能导致vue-router为空白. 
import {createRouter, createWebHashHistory} from "vue-router";


const index = () => import("@/page/index/layout")
// const header = () => import("@/page/header/header")
const route = () => import("@/page/root/root")
const articleInfo = () => import("@/page/info/info_article")
const archive = () => import("@/page/archived/archived.vue")

const routes = [
    {path: "/", redirect: "/index.html"},
    {
        path: "/index.html",
        name: "IndexPage",
        component: index
    },
    {
        path: "/test.html",
        name: "PageRoot",
        component: route,
    },
    {
        path: "/article/info.html",
        name: "articleInfo",
        component: articleInfo,
    },
    {
        path: "/archived.html",
        name: "archived",
        component: archive,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})