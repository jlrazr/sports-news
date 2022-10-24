<template>
  <hero-banner hero="hero-1.webp" alt="PGD Sports News hero banner featuring a soccer player celebrating a goal.">
  </hero-banner>
  <SectionComp title="Featured News">
    <Carousel>
      <Slide v-for="article in featuredNews" :key="article" :autoplay="2000" :transition="500">
        <div class="carousel__item">
          <ArticleCard :key="article.id" :title="article.title" :author="article.author"
            :publishDate="article.publishDate" :hits="article.hits" :body="article.body" :image="article.image"
            :category="article.category" :url="article.url" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </SectionComp>

  <SectionComp title="Featured Videos">
    <VideoCard v-for="video in featuredVideos" :key="video.id" :url="video.url" :coverImg="video.coverImage"
      :title="video.title" :copy="video.copy" :views="video.views" :rating="video.rating" :altText="video.alt"
      @click="addView(video.id, video.views)" />
  </SectionComp>

  <SectionComp title="Know the Players">
    <PlayerCard v-for="player in featuredPlayers" :key="player.id" :name="player.playerName" :picture="player.playerPic"
      :position="player.position" :country="player.country" :dob="player.dayOfBirth" :social="player.social" />
  </SectionComp>

</template>

<script>
// @ is an alias to /src
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import VideoCard from "@/components/VideoCard/VideoCard.vue";
import PlayerCard from "@/components/PlayerCard/PlayerCard.vue";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";

//Services
import { getVideos, getPlayers, getNews, updateViews } from "@/services/DataService";
import randomize from "@/services/RandomizeService";
import generateMetaDesc from "@/services/MetaService";

// carousel
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SectionComp from "@/components/SectionComp/SectionComp.vue";


export default {
  name: "HomeView",
  data() {
    return {
      featuredNews: [],
      featuredVideos: [],
      featuredPlayers: [],
    };
  },
  components: {
    HeroBanner,
    VideoCard,
    PlayerCard,
    ArticleCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionComp,
  },
  async beforeCreate() {
    //Filter the featured videos
    let featVideos = await getVideos();
    featVideos = featVideos.filter((post) => post.category === "featured");
    if (this.featuredVideos.length < 5) {
      this.featuredVideos = featVideos;
    }

    //Randomize the shown players
    const players = await getPlayers();
    this.featuredPlayers = randomize(players, 4);

    //Filter the featured posts
    let featNews = await getNews();
    featNews = featNews.filter((post) => post.category === "featured");
    if (this.featuredNews.length < 7) {
      this.featuredNews = featNews;
    }

    generateMetaDesc("A Sports news site to catch up with all the news from international sports as well as with the companies internal tournaments.");
  },
  methods: {
    async addView(id, current) {
      let newCount = current + 1;
      let response = await updateViews(id, { data: { views: newCount } });
      let elToUpdate = this.featuredVideos.findIndex((element) => {
        return element.id === id
      });

      this.featuredVideos[elToUpdate].views = response.attributes.views;
    }
  }
};
</script>
<style scoped lang="scss">
@import 'vue3-carousel/dist/carousel.css';

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
</style>
