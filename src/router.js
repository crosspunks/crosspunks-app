import VueRouter from 'vue-router'

import Front from "./pages/Front";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Details from "./pages/Details";
import Mint from "./pages/Mint";
import MyPunks from "./pages/MyPunks";
import Gallery from "./pages/Gallery";
import Referral from "./pages/Referral";

const routes = [{
    path: '/',
    name: 'front',
    component: Front,
    children: [{
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Home' },
    },
    {
        path: '/i/:id',
        name: 'invite_home',
        component: Home,
        meta: { title: 'Home' },
    },
    {
        path: '/mint',
        name: 'mint',
        component: Mint,
        meta: { title: 'Mint' },
    },
    {
        path: '/myPunks',
        name: 'myPunks',
        component: MyPunks,
        meta: { title: 'MyPunks' },
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: { title: 'Gallery' },
    },
    {
        path: '/marketplace',
        name: 'marketplace',
        component: Marketplace,
        meta: { title: 'Marketplace' },
    },
    {
        path: '/detail/crosspunk/:id',
        name: 'details',
        component: Details,
        meta: { title: 'Details' },
    },
    {
        path: '/referralLink',
        name: 'referralLink',
        component: Referral,
        meta: { title: 'My referral link' },
    },
    ]
}];

const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes,
});

export default router
