<template>
  <main class="post-view" v-if="this.postData">
    <section class="post-view__section">
      <div class="post-view__banner-bg">
        <h2 class="post-view__title">{{ postData.title }}</h2>
      </div>
    </section>
    <section class="post-view__section">
      <div class="post-view__flex-container">
        <div class="post-view__info">
          <p>
            Published: <span class="">{{ postData.publishDate }}</span>
          </p>
          <p>
            Category: <span class="">{{ postData.category }}</span>
          </p>
        </div>
        <img class="post-view__cover" :src="postImage" alt="Cover image for the news post." />
        <p v-html="postData.body" class="post-view__body"></p>
      </div>
    </section>
  </main>
  <NotFound v-else />
</template>

<script>
// @ is an alias to /src
import { getNewsPost } from "@/services/DataService";
import NotFound from "./NotFound.vue";
import generateMetaDesc from "@/services/MetaService";

//Services

export default {
  name: "PostView",
  data() {
    return {
      postData: null,
      postImage: null,
    };
  },

  async beforeCreate() {
    try {
      const post = await getNewsPost(this.$route.params.id);
      let id = post.id;
      this.postData = { id, ...post.attributes };
      this.postImage = require(`@/assets/articles/${this.postData.image}.webp`);
    } catch (error) {
      console.log(error);
      this.postData = null;
    }

    this.$watch(
      () => this.$route.params,
      async () => {
        try {
          const post = await getNewsPost(this.$route.params.id);
          this.postData = post;
          this.postImage = require(`@/assets/articles/${this.postData.image}.webp`);
        } catch (error) {
          console.log(error);
          this.postData = null;
        }
      }
    );

    generateMetaDesc(`${this.postData.title} post.`);
  },

  components: { NotFound },
};
</script>
<style lang="scss">
.post-view {
  &__banner-bg {
    background-image: url("../assets/articles/post-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    padding: 50px 0px;
    position: relative;
  }

  &__flex-container {
    padding: 25px 0px;
  }

  &__title {
    font-weight: 900;
    background: rgb(103 103 103 / 45%);
    padding: 20px;
  }

  &__cover {
    width: 100%;
  }

  &__info {
    display: flex;
    font-size: 12px;
    justify-content: space-evenly;

    span {
      font-weight: 600;
      color: #214295;
    }
  }

  &__body {
    text-align: justify;
    font-size: 18px;
    line-height: 1.7;
    padding: 5px 15px;

    img {
      max-width: 100%;
    }
  }

  table {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 12px 0 14px;
    color: #222;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;

    th {
      color: #fff;
      background: #222;
      border: 1px solid rgb(162, 162, 162);
      padding: 5px 14px 5px 12px;
      height: 32px;
    }

    td {
      border: 1px solid rgba(0, 0, 0, 0.544);
      padding: 5px 14px 5px 12px;
      height: 32px;
    }
  }


  @media only screen and (min-width: 761px) {
    &__flex-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
      margin: 0 auto;
      width: 75%;
    }

    &__banner-bg {
      font-size: 32px;
      padding: 80px 0px;
    }

    &__title {
      padding: 50px;
    }

    &__info {
      order: 0;
      display: flex;
      font-size: 14px;
      justify-content: left;
      width: 100%;

      p {
        margin-right: 25px;
      }
    }

    &__cover {
      box-shadow: 0px 6px 12px #a2abc5;
      order: 1;
      margin-top: 45px;
      padding: 5px;
      width: 20%;
      height: fit-content;
    }

    &__body {
      order: 1;
      width: 65%;
    }
  }
}
</style>
