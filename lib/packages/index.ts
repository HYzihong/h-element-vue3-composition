import HButton from "./button";
import type { App } from "vue";
const components = [HButton];
// const app = Vue.createApp();
// components.forEach((component) => {
//   app.component(component.name, component);
// });

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
