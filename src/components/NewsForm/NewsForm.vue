<template>
  <form @submit="onSubmit" class="add-post" v-if="showForm">
    <h1>Create a new post</h1>
    <p>Fields marked with * are required fields.</p>
    <div>
      <label class="add-post__label" for="title">Title*</label>
      <input class="add-post__title" type="text" v-model="title" name="title" placeholder="Enter the post's title"
        required />
    </div>
    <label class="add-post__label" for="body">Body Text*</label>
    <div id="editor" class="add-post__form-control">

    </div>
    <div class="add-post__form-control">
      <label for="featured">Featured article? </label>
      <input name="featured" type="checkbox" value="featured" v-model="category" />
    </div>
    <div class="add-post__form-control add-post__image-picker">
      <h2>Pick a cover image for your post</h2>

      <input id="image-1" class="add-post__cover-1" name="featured" type="radio" value="article-1" v-model="image" />
      <label for="image-1" tabindex="0"><img :src="images.article1"
          alt="First option for the cover image for the new post" /></label>

      <input id="image-2" class="add-post__cover-2" name="featured" type="radio" value="article-2" v-model="image" />
      <label for="image-2" tabindex="0"><img :src="images.article2"
          alt="Second option for the cover image for the new post" /></label>

      <input id="image-3" class="add-post__cover-3" name="featured" type="radio" value="article-3" v-model="image" />
      <label for="image-3" tabindex="0"><img :src="images.article3"
          alt="Third option for the cover image for the new post" /></label>

      <input id="image-4" class="add-post__cover-4" name="featured" type="radio" value="article-4" v-model="image" />
      <label for="image-4" tabindex="0"><img :src="images.article4"
          alt="Fourth option for the cover image for the new post" /></label>

      <input id="image-5" class="add-post__cover-5" name="featured" type="radio" value="article-5" v-model="image" />
      <label for="image-5" tabindex="0"><img :src="images.article5"
          alt="Fifth option for the cover image for the new post" /></label>

      <input id="image-6" class="add-post__cover-6" name="featured" type="radio" value="article-6" v-model="image" />
      <label for="image-6" tabindex="0"><img :src="images.article6"
          alt="Sixth option for the cover image for the new post" /></label>

      <input id="image-7" class="add-post__cover-7" name="featured" type="radio" value="article-7" v-model="image" />
      <label for="image-7" tabindex="0"><img :src="images.article7"
          alt="Seventh option for the cover image for the new post" /></label>

      <input id="image-8" class="add-post__cover-8" name="featured" type="radio" value="article-8" v-model="image" />
      <label for="image-8" tabindex="0"><img :src="images.article8"
          alt="eighth option for the cover image for the new post" /></label>

      <input id="image-9" class="add-post__cover-9" name="featured" type="radio" value="article-9" v-model="image" />
      <label for="image-9" tabindex="0"><img :src="images.article9"
          alt="Ninth option for the cover image for the new post" /></label>

      <input id="image-10" class="add-post__cover-10" name="featured" type="radio" value="article-10" v-model="image" />
      <label for="image-10" tabindex="0"><img :src="images.article10"
          alt="Tenth option for the cover image for the new post" /></label>

      <input id="image-11" class="add-post__cover-11" name="featured" type="radio" value="article-11" v-model="image" />
      <label for="image-11" tabindex="0"><img :src="images.article11"
          alt="eleventh option for the cover image for the new post" /></label>

      <input id="image-12" class="add-post__cover-12" name="featured" type="radio" value="article-12" v-model="image" />
      <label for="image-12" tabindex="0"><img :src="images.article12"
          alt="twelfth option for the cover image for the new post" /></label>
    </div>

    <input type="submit" value="submit" class="add-post__btn" />
  </form>
  <section v-else>
    <h2>Your post has been submitted. You are now being redirected...</h2>
  </section>
</template>

<script>
import { postNews } from "@/services/DataService";
import getDate from "@/services/GetDate";
import Editor from '@toast-ui/editor';

export default {
  name: "AddInformation",
  data() {
    return {
      id: Math.floor(Math.random() * 100000 / Math.random() * 1000),
      title: null,
      author: this.getUser() ? this.getUser().username : "Anonymous User",
      publishDate: getDate(),
      hits: 0,
      body: null,
      image: "article-1", //Fallback
      category: null,
      url: "#",
      showForm: true,

      images: {
        article1: require(`@/assets/articles/article-1.webp`),
        article2: require(`@/assets/articles/article-2.webp`),
        article3: require(`@/assets/articles/article-3.webp`),
        article4: require(`@/assets/articles/article-4.webp`),
        article5: require(`@/assets/articles/article-5.webp`),
        article6: require(`@/assets/articles/article-6.webp`),
        article7: require(`@/assets/articles/article-7.webp`),
        article8: require(`@/assets/articles/article-8.webp`),
        article9: require(`@/assets/articles/article-9.webp`),
        article10: require(`@/assets/articles/article-10.webp`),
        article11: require(`@/assets/articles/article-11.webp`),
        article12: require(`@/assets/articles/article-12.webp`),
      },

      editor: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const newPost = {
        id: this.id,
        title: this.title,
        author: this.author,
        publishDate: this.publishDate,
        hits: this.hits,
        body: this.editor.getHTML(),
        image: this.image,
        category: this.category ? "featured" : "uncategorized",
        url: `#/posts/${this.id}`,
      };

      postNews(newPost);
      this.showForm = false;

      setTimeout(() => {
        this.$router.push(`/posts/${newPost.id}`);
      }, 3000);
    },
    getUser() {
      const userData = JSON.parse(window.localStorage.getItem("profile"));
      return userData;
    }
  },
  mounted() {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      placeholder: "Enter the post's content here",
      hideModeSwitch: true
    });

    this.editor = editor;

    this.getUser();
  }
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style lang="scss">
@import '@toast-ui/editor/dist/toastui-editor.css';

.add-post {
  box-shadow: 0px 5px 10px #eaeaea;
  border: 1px solid #eaeaea;
  padding: 20px;
  text-align: left;

  &__form-control {
    padding: 10px 0px;
  }

  &__label {
    display: block;
    margin: 30px 20px 10px 0px;
  }

  &__title,
  &__body {
    border-radius: 2px;
    width: 100%;
    border: 2px solid #eaeaea;
    line-height: 30px;
    padding: 5px;
    box-sizing: border-box;
  }

  &__image-picker {
    border: 1px solid #eaeaea;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;

    label {
      display: inline-block;
      width: 85px;
      height: 85px;
      padding: 5px;
    }

    input[type="radio"] {
      appearance: none;
      position: absolute;
    }

    input[type="radio"]:checked+label>img {
      box-sizing: border-box;
      border: 3px solid #42b983;
    }

    img {
      width: 90px;
      border-radius: 2px;

      &:hover {
        cursor: pointer;
      }
    }

    @media only screen and (min-width: 761px) {
      padding: 20px 40px 40px;
    }
  }

  &__btn {
    color: #fff;
    background: #e03415;
    border: 1px solid #c02c12;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 14px;
    margin-top: 10px;
  }

  .toastui-editor-contents {
    z-index: 1;
  }

  @media only screen and (min-width: 761px) {
    margin: 0 auto;
    width: 60%;
  }
}
</style>
