import HButtonGroup from "./HButtonGroup.vue";
import { App } from "vue";
/* istanbul ignore next */
HButtonGroup.install = (vue: App) => {
  vue.component(HButtonGroup.name, HButtonGroup);
};

export default HButtonGroup;
