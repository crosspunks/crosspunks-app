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
    
    @font-face {
        font-family: myFirstFont;
        src: url("/font/CharriotDeluxe.ttf");
        font-weight: bold;
    }

    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;;
        font-weight: 300;
        color: #2c2c2c;
        background-color: #151515;
    }

    code {
        font-family: 'Open Sans', sans-serif;;
    }

    #logo {
        color: #054f84;
        font-weight: 400;
        font-size: 25px;
        line-height: 28px;
        letter-spacing: 1px;
        font-family: 'Open Sans', sans-serif;;
    }

    .nav-link a{
        color: #ffbf16;
    }

    h1, h2, h3, h5{
        margin-bottom: 15px;
        letter-spacing: 1.5px;
    }

    a.nav-link{
        letter-spacing: 1px;
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

    .pixelated {
        image-rendering:-moz-crisp-edges;
        image-rendering:pixelated
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

    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }
</style>