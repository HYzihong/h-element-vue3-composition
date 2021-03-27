import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HElement from "./../lib/packages/index";

createApp(App).use(HElement).use(store).use(router).mount("#app");
