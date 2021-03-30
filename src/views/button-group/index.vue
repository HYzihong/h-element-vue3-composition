<template>
  <div class="button-demo">
    <h-button-group>
      <h-button type="primary" @click="handleClick">主要按钮</h-button>
      <h-button type="primary" plain disabled>主要按钮</h-button>
    </h-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HButtonGroupHome",
  data() {
    return {};
  },
  methods: {
    handleClick(e: Event): void {
      console.log(e);
    },
  },
});
</script>
