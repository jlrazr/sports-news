import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import PostView from "@/views/PostView.vue";
import NotFound from "@/views/NotFound.vue";
import ProfileView from "@/views/ProfileView.vue";
// services
import AuthService from "@/services/AutService";
const auth = new AuthService();

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/create-post",
    name: "create-post",
    component: CreatePostView,
    beforeEnter: () => {
      return auth.loggedIn();
    },
  },
  {
    path: "/posts/:id",
    name: "post",
    component: PostView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };

export default router;
