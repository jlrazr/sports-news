<template>
  <HeaderComp />
  <router-view />
  <FooterComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp/HeaderComp.vue";
import FooterComp from "./components/FooterComp/FooterComp.vue";

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  created() {
    document.title = 'PGD SPORTS NEWS';
    const htmlEl = document.querySelector('html');
    htmlEl.setAttribute('lang', 'en');
    const head = htmlEl.querySelector('head');
    const linkBackend = document.createElement('link');
    linkBackend.setAttribute('rel', 'preconnect');
    linkBackend.setAttribute('href', process.env.VUE_APP_LOGIN_ENDPOINT);
    head.appendChild(linkBackend);
    const linkFonts = document.createElement('link');
    linkFonts.setAttribute('rel', 'preload');
    linkFonts.setAttribute('as', 'font');
    linkFonts.setAttribute('href', 'https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  },
  props: [],
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");

body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
