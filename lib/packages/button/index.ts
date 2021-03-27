import HButton from "./HButton.vue";
import { App } from "vue";
/* istanbul ignore next */
HButton.install = (vue: App) => {
  vue.component(HButton.name, HButton);
};

export default HButton;
