<template>
    <div class="container">
        <h1>News</h1>
        <div id="medium-widget"></div>
    </div>
</template>

<script>
export default {
    name: "News",
    mounted() {
        let medium = document.createElement('script');
        medium.setAttribute('src', 'https://medium-widget.pixelpoint.io/widget.js');
        medium.onload = function() {
            let mediumScript = document.createElement('script');
            mediumScript.textContent = `MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@crosspunks","postsPerLine":1,"limit":6,"picture":"big","fields":["description","publishAt"],"ratio":"original"}})`;
            document.head.appendChild(mediumScript);
        };
        document.head.appendChild(medium);
    }
}
</script>

<style>
    .medium-widget-article__title, .medium-widget-article__description, .medium-widget-article__date {
        color: #e7e2e2 !important;
    }
</style>
