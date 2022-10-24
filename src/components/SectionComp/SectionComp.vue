<template>
  <section class="section">
    <h2 class="section__title">{{title}}</h2>
    <div class="section__container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionComp",
  data() {
    return {
      hover: false,
    };
  },
  props: ["title"],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
.section {
  padding: 35px;

  &__title {
    padding-left: 6px;
    text-align: left;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}

.section:nth-child(even) {
  background-color: #efefef;
}

.carousel {
  width: 100%;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
