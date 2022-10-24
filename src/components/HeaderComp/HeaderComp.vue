<template>
  <header class="header-outer">
    <div class="header-logo header-inner responsive-wrapper">
      <img class="header-logo" id="logo" alt="PGD Sport News" :src="logo" />
      <MainNav></MainNav>
    </div>
  </header>
</template>

<script>
import MainNav from "@/components/MainNav/MainNav.vue";
export default {
  name: "HeaderComp",
  data: () => {
    return {
      logo: require("@/assets/logo/logo.webp"),
    };
  },
  components: {
    MainNav,
  },
  props: [],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
$header-outer-height: 110px;
$header-inner-height: 70px;
$header-height-difference: calc($header-outer-height - $header-inner-height);
$header-bg: #fff;

.responsive-wrapper {
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  min-height: 80px;
}

/* Sticky header */
.header-outer {
  /* Make it stick */
  height: $header-outer-height;
  position: sticky;
  top: calc($header-height-difference * -1);
  /* Multiply by -1 to get a negative value */
  display: flex;
  align-items: center;

  /* Other */
  background-color: $header-bg;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.header-inner {
  /* Make it stick */
  height: $header-inner-height;
  position: sticky;
  top: 0;

  /* Other */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Styling of other elements */
.header-logo img {
  display: block;
  height: calc($header-inner-height);
}

.header-navigation {
  display: flex;
  flex-wrap: wrap;
}

.header-navigation a,
.header-navigation button {
  font-size: 1.125rem;
  color: inherit;
  margin-left: 1.75rem;
  position: relative;
  font-weight: 500;
}

.header-navigation a {
  display: none;
  font-size: 1.125rem;
  color: inherit;
  text-decoration: none;
}

.header-navigation button {
  border: 0;
  background-color: transparent;
  padding: 0;
}

.header-navigation a:hover:after,
.header-navigation button:hover:after {
  transform: scalex(1);
}

.header-navigation a:after,
.header-navigation button:after {
  transition: 0.25s ease;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentcolor;
  transform: scalex(0);
  position: absolute;
  bottom: -2px;
  left: 0;
}

header {
  z-index: 10;
}
</style>
