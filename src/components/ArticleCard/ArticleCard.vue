<template>
  <article class="article-tile">
    <a class="article-tile__link" :href="url">
      <div class="article-tile__image-frame">
        <img class="article-tile__image" :src="imagePath" alt="News post article cover image" @mouseover="hover = true"
          @mouseleave="hover = false" :class="{ scaled: hover }" />
      </div>
      <div class="article-tile__info">
        <div class="article-tile__icon-text-container">
          <img class="article-tile__folder-icon" alt="Folder icon" :src="folderIcon" />
          <h3 class="article-tile__category">{{ category }}</h3>
        </div>

        <h2 class="article-tile__title">{{ title }}</h2>
        <div class="article-tile__icon-text-container">
          <img class="article-tile__folder-icon" alt="User icon" :src="userIcon" />
          <h4 class="article-tile__author">{{ author }}</h4>
          <img class="article-tile__folder-icon" alt="" :src="calendarIcon" />
          <h4 class="article-tile__date">{{ publishDate }}</h4>
        </div>
        <p v-html="introCopy" class="article-tile__intro"></p>
        <a :href="url"><button class="article-tile__cta">Read More</button></a>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      imagePath: require(`@/assets/articles/${this.image}.webp`),
      folderIcon: require(`@/assets/icons/folder.png`),
      userIcon: require(`@/assets/icons/account.png`),
      calendarIcon: require(`@/assets/icons/calendar.png`),
      introCopy: `${this.body.slice(0, 72)}...`,
      hover: false,
    };
  },
  props: [
    "title",
    "author",
    "publishDate",
    "hits",
    "body",
    "image",
    "category",
    "url",
  ],
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
.article-tile {
  background: #fff;

  &__link {
    cursor: inherit;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  &__image {
    width: 100%;
    transition: transform 0.5s ease 0s;
  }

  &__info {
    text-align: left;
  }

  &__category,
  &__author,
  &__date {
    display: inline-block;
    font-size: 12px;
    margin: 5px 0px;
  }

  &__author,
  &__date {
    color: #5B5B5B;
    margin-right: 20px;
  }

  &__category {
    color: #E22504;
  }

  &__title {
    color: #232d39;
    cursor: pointer;
    font-size: 18px;
    margin: 5px 0px;

    &:hover {
      color: #E22504;
    }
  }

  &__intro {
    color: #666;
    font-size: 16px;
    margin: 5px 0px;
  }

  &__image-frame {
    overflow: hidden;
    height: 300px;
  }

  &__cta {
    background: #E22504;
    border: 1px solid #eb4224;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;
    text-transform: uppercase;
    padding: 6px 12px;

    &:hover {
      background: #ea3616;
      transition: all 0.5s ease 0s;
    }
  }

  &__icon-text-container {
    display: flex;
    align-items: center;
  }

  &__folder-icon {
    display: inline-block;
    margin-right: 5px;
    width: 14px;
  }

}

.scaled {
  transform: scale(1.1);
}
</style>
