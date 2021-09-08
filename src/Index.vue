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

    .form-group.form-check-inline {
        display: block;
    }

    .pixelated {
        image-rendering:-moz-crisp-edges;
        image-rendering:pixelated
    }

    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }

    .badge-primary {
        background-color: rgb(124, 64, 220) !important;
    }

    /* SIDEBAR */

    #mySidebar {
        z-index: 1020;
    }

    /* .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh !important;
        z-index: 100;
        padding: 48px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    } */

    .sidebar {
        height: 100%;
        /* 100% Full-height */
        width: 300px;
        /* 0 width - change this with JavaScript */
        position: fixed;
        /* Stay in place */
        z-index: 1;
        /* Stay on top */
        top: 0;
        left: -320px;
        background-color: #151515;
        /* Black*/
        overflow-x: hidden;
        /* Disable horizontal scroll */
        padding-top: 60px;
        /* Place content 60px from the top */
        transition: 0.5s;
        /* 0.5 second transition effect to slide in the sidebar */
    }

    /* The sidebar links */

    .sidebar a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: white;
        display: block;
        transition: 0.3s;
    }

    /* When you mouse over the navigation links, change their color */

    .sidebar a:hover {
        color: white;
    }

    /* Position and style the close button (top right corner) */

    .sidebar .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    /* The button used to open the sidebar */

    .openbtn {
        font-size: 20px;
        cursor: pointer;
        background-color: #111;
        color: white;
        padding: 10px 15px;
        border: none;
    }

    .openbtn:hover {
        background-color: #444;
    }

    #sidebarCover {
        position: fixed;
        background-color: rgba(82, 68, 68, 0.5);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
    }

    .hideCover {
        display: none;
    }

    .sidebarWrapper {
        padding-left: 20px;
        margin-bottom: 100px;
    }

    .sidebarHeader {
        font-size: 23px;
        font-weight: bold;
        color: white;
    }

    .chContainer {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 8px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */

    .chContainer input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 25px;
        width: 25px;
        left: 0;
        z-index: 9999;
    }

    /* Create a custom checkbox */

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        width: 22px;
        background-color: #151515;
        border-radius: 3px;
        border: 1px solid #888;
    }

    /* On mouse-over, add a grey background color */

    .chContainer:hover input~.checkmark {
        background-color: #151515;
    }

    /* When the checkbox is checked, add a blue background */

    .chContainer input:checked~.checkmark {
        background-color: #151515;
    }

    /* Create the checkmark/indicator (hidden when not checked) */

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */

    .chContainer input:checked~.checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */

    .chContainer .checkmark:after {
        left: 8px;
        top: 1px;
        width: 6px;
        height: 16px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .chLabel {
        position: relative;
        left: 28px;
        color: white;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */

    @media screen and (max-height: 450px) {
        .sidebar {
            padding-top: 15px;
        }
        .sidebar a {
            font-size: 18px;
        }
    }

    #sidebarBtn {
        position: fixed;
        height: 50px;
        bottom: 10px;
        left: 30px;
        width: 260px;
        background-color: #fff
    }

    #sidebarBtn button {
        font-size: 15px;
        width: 40%;
        margin-top: 0;
        margin-left: 5%;
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

    .crosspunk-btn-rev {
        background-color: #d93d76;
        box-shadow: 0 0 10px #d93d76;
        color: white;
    }

    .crosspunk-btn-rev:hover {
        background-color: #7c40dc;
        box-shadow: 0 0 10px #7c40dc;
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

    .card-img-top, .crosspunks-card-img-top {
        background: rgb(217,61,118);
        background: linear-gradient(180deg, rgba(217,61,118,1) 0%, rgba(124,64,220,1) 50%);
        width: 100%;
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