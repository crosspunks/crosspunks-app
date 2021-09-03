import VueRouter from 'vue-router'

import Front from "./pages/Front";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Details from "./pages/Details";
import Wallet from "./pages/Wallet";
import Mint from "./pages/Mint";
import MyPunks from "./pages/MyPunks";
import About from "./pages/About";
import ForSale from "./pages/ForSale";

const routes = [{
    path: '/',
    name: 'front',
    component: Front,
    children: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/i/:id',
        name: 'invite_home',
        component: Home,
    },
    {
        path: '/mint',
        name: 'mint',
        component: Mint,
    },
    {
        path: '/myPunks',
        name: 'myPunks',
        component: MyPunks,
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Marketplace,
    },
    {
        path: '/forSale',
        name: 'forSale',
        component: ForSale,
    },
    {
        path: '/detail/crosspunk/:id',
        name: 'details',
        component: Details,
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: Wallet,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    ]
}];

const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes,
});

export default router
