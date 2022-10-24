<template>
  <article class="player-card">
    <div class="player-card__container">
      <div class="player-card__image-container">
        <img class="player-card__image" :src="imagePath" :alt="`A profile picture of ${name}`" />
        <div class="player-card__overlay" @mouseover="hover = true" @mouseleave="hover = false"
          :class="{ visible: hover }">
          <h2 class="player-card__name">{{ name }}</h2>
          <h3 class="player-card__pos">POS: {{ position }}</h3>
          <h3 class="player-card__nat">NAT: {{ country }}</h3>
          <h3 class="player-card__dob">DOB: {{ dob }}</h3>
        </div>
      </div>
      <div class="player-card__info">
        <h3 class="player-card__info-name">{{ name }}</h3>
        <div class="player-card__social">
          <a v-for="link in social" :key="link.id" :href="link.url" target="_blank"><img
              :src="require(`@/assets/icons/${link.icon}.png`)" :alt="`${link.icon} logo icon`" /></a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PlayerCard",
  data() {
    return {
      imagePath: require(`@/assets/players/${this.picture}.webp`),
      hover: false,
    };
  },
  props: ["name", "picture", "position", "country", "dob", "social"],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
.player-card {
  margin-bottom: 20px;

  &__image-container {
    max-height: 375px;
    position: relative;
  }

  &__overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    background: #e97d7dd4;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    transition: opacity 0.3s linear 0s;
  }

  &__info {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 45px;
  }

  &__info-name {
    align-items: center;
    background: #161f36;
    color: #fff;
    display: flex;
    font-size: 16px;
    min-height: 45px;
    margin: 0px;
    padding: 0px 10px;
    text-align: center;
    width: 116px;
  }

  &__social {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 45px;
    justify-content: space-evenly;
    padding: 8px 10px 0px;

    img {
      margin-right: 4px;
      width: 22px;
    }
  }
}

.visible {
  opacity: 1;
}
</style>
