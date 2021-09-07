<template>
    <div id="app">
        <div id="main_container" >
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style>
    @import'~bootstrap/dist/css/bootstrap.css';

    @media only screen and (min-width: 1601px) {
        h1 {
            font-size: 60pt;
        }
    }

    @media only screen and (max-width: 1600px) {
        h1 {
            font-size: 40pt;
        }
    }

    @media only screen and (max-width: 700px) {
        h1 {
            font-size: 30pt;
        }
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 20pt;
        }
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        background-color: #151515;
    }

    #logo {
        color: #054f84;
        font-weight: 400;
        font-size: 25px;
        line-height: 28px;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
    }

    h1, h2, h3, h5{
        margin-bottom: 15px;
        letter-spacing: 1.5px;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        color: white;
    }

    a.nav-link{
        letter-spacing: 1px;
    }

    input[type="number"], input[type="number"]:focus {
        background-color: #151515;
        border-color: #888;
        color: white;
    }

    select, select:focus {
        background-color: #2c2c2c !important;
        border-color: #888 !important;
        color: white !important;
    }

    .pixelated {
        image-rendering:-moz-crisp-edges;
        image-rendering:pixelated
    }

    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }

    /* SIDEBAR */

    #mySidebar {
        z-index: 1020;
    }

    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh !important;
        z-index: 100;
        padding: 48px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }

    #sidebar-wrapper{
        min-height: 100vh !important;
        width: 100vw;
        margin-left: -1rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }

    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }

    /* CROSSPUNK */

    .crosspunk-btn {
        background-color: #7c40dc;
        color: white;
    }

    .crosspunk-btn:hover {
        background-color: #d93d76;
        color: white;
    }

    .crosspunk-card {
        color: white;
    }

    .crosspunk-details {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: #e7e2e2 !important;
    }

    .crosspunk-a {
        color: #d93d76 !important;
        text-shadow: #d93d76 0 0 10px;
    }

    .crosspunk-a:hover {
        text-decoration: none;
    }

    /* CARD */

    .card {
        background-color: #2c2c2c;
        color: white;
    }

    .card-img-top {
        background: rgb(217,61,118);
        background: linear-gradient(180deg, rgba(217,61,118,1) 0%, rgba(124,64,220,1) 50%);
    }

    .close {
        color: white !important;
    }

    /* MODAL */

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-content {
        background-color: #151515 !important;
    }

    .modal-header {
        border-bottom: 0px !important;
    }

    .modal-footer {
        border-top: 0px !important;
    }
</style>