import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UIComponents from "@/components/UI/index.js";

const app = createApp(App);

UIComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
