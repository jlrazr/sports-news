<template>
  <NewsForm />
</template>

<script>
// @ is an alias to /src
import NewsForm from "@/components/NewsForm/NewsForm.vue";
import generateMetaDesc from "@/services/MetaService";

export default {
  name: "CreatePostView",
  data() {
    return {};
  },
  components: {
    NewsForm,
  },
  beforeCreate() {
    generateMetaDesc("Create a sports news post for the World to see!");
  }
};
</script>
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
</style>
