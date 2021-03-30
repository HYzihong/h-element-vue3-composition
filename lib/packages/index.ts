import HButton from "./button";
import HButtonGroup from "./button-group";
import type { App } from "vue";
const components = [HButton, HButtonGroup];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
