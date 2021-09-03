import VueRouter from 'vue-router'

import Front from "./pages/Front";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Details from "./pages/Details";
import Mint from "./pages/Mint";
import MyPunks from "./pages/MyPunks";
import ForSale from "./pages/ForSale";

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
        component: Marketplace,
        meta: { title: 'Gallery' },
    },
    {
        path: '/forSale',
        name: 'forSale',
        component: ForSale,
        meta: { title: 'ForSale' },
    },
    {
        path: '/detail/crosspunk/:id',
        name: 'details',
        component: Details,
        meta: { title: 'Details' },
    },
    ]
}];

const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes,
});

export default router
