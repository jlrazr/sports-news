<template>
  <section class="hero-banner">
    <div class="hero-banner__container">
      <img
        class="hero-banner__image"
        :src="require(`@/assets/hero/${hero}`)"
        :alt="alt"
      />
      <div class="hero-banner__image-overlay">
        <h1 class="hero-banner__title">PGD Sports News Center</h1>
        <h2 class="hero-banner__subtitle">
          All the news and information from your favorites teams and sports!
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBanner",
  props: ["hero", "alt"],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
.hero-banner {
  color: #fff;
  width: 100%;

  &__container {
    position: relative;
  }

  &__image {
    width: 100%;
    transition: transform 0.5s ease 0s;
  }

  &__image-overlay {
    position: absolute;
    left: 2%;
    top: 20%;
  }

  &__title {
    background: #ffffffcc;
    border-radius: 5px;
    color: #000;
    font-size: 16px;
    margin: 0px;
    max-width: 185px;
    padding: 8px;
    text-align: center;
  }

  &__subtitle {
    background: #ed563bcc;
    border-radius: 5px;
    font-size: 14px;
    margin: 20px 0px;
    max-width: 250px;
    padding: 6px;
    text-align: center;
  }

  @media only screen and (min-width: 761px) {
    &__image-overlay {
      position: absolute;
      left: 5%;
      top: 25%;
    }
    &__title {
      font-size: 36px;
      max-width: 440px;
      padding: 12px;
    }
    &__subtitle {
      font-size: 30px;
      max-width: 500px;
      padding: 12px;
    }
  }
}
</style>
