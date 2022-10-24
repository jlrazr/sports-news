import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AuthService from "./services/AutService";
import store from "./store";

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$authService = new AuthService();

app.mount("#app");
