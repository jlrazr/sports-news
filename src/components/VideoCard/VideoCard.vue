<template>
  <article class="featured-videos">
    <a class="featured-videos__link" :href="url" target="_blank">
      <div class="featured-videos__image-frame">
        <div class="featured-videos__image-overlay">
          <img class="featured-videos__play-btn" src="../../assets/icons/play-btn.png" alt="Play button icon." />
        </div>
        <img class="featured-videos__image" :src="imagePath" :alt="altText" />
      </div>
      <div class="featured-videos__info">
        <h2 class="featured-videos__title">{{ title }}</h2>
        <p class="featured-videos__copy">{{ copy }}</p>
        <p class="featured-videos__views">Views: {{ views }}</p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "VideoCard",
  data() {
    return {
      imagePath: require(`@/assets/videos/${this.coverImg}.webp`),
    };
  },
  props: ["url", "coverImg", "title", "copy", "views", "rating", "altText"],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
.featured-videos {
  background: #fff;
  box-shadow: 0px 5px 8px #dfdfdf;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__link {
    text-decoration: none;
  }

  &__image {
    width: 100%;
    transition: transform 0.5s ease 0s;
  }

  &__info {
    min-height: 150px;
    padding: 20px;
    text-align: left;
  }

  &__title {
    color: #232d39;
    font-size: 16px;
    font-weight: 600;
    margin: 5px 0px;
  }

  &__copy,
  &__views {
    color: #666;
    font-size: 14px;
    margin: 5px 0px;
  }

  &__views {
    color: #ed563b;
    margin-top: 25px;
  }

  &__image-frame {
    overflow: hidden;
    position: relative;
    max-height: 158px;
    width: 100%;
  }

  &__image-overlay {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 251, 255, 0) 100%);
    height: 100%;
    position: absolute;
    left: 0px;
    opacity: 0;
    top: 0px;
    width: 100%;
    transition: opacity 0.5s ease 0s;

    &:hover {
      opacity: 1;
    }
  }

  &__play-btn {
    position: relative;
    top: calc(50% - 28px);
  }

  @media only screen and (min-width: 761px) {
    max-width: 256px;
  }
}
</style>
