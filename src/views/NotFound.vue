<template>
  <main class="not-found">
    <section class="not-found__section">
      <h1>Page not found :/</h1>
      <p>
        Sorry, we didn't find the page you are looking for. Let's get back home
      </p>
      <router-link to="/">Home</router-link>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import generateMetaDesc from "@/services/MetaService";

export default {
  name: "NotFound",
  data() {
    return {};
  },
  beforeCreate() {
    generateMetaDesc("Page not found.");
  }
};
</script>
<style scoped lang="scss">

</style>
