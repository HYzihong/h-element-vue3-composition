<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HButtonGroup",
});
</script>
<style lang="css" scoped>
.h-button-group {
  display: inline-block;
  vertical-align: middle;
}
.el-button-group:after,
.el-button-group:before {
  display: table;
  content: "";
}
</style>
