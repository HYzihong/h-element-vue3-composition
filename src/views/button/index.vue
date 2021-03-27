<template>
  <div class="button-demo">
    <div>
      <h-button>默认按钮</h-button>
      <h-button type="primary" @click="handleClick">主要按钮</h-button>
      <h-button type="success">成功按钮</h-button>
      <h-button type="info">信息按钮</h-button>
      <h-button type="warning">警告按钮</h-button>
      <h-button type="danger">危险按钮</h-button>
    </div>
    <div>
      <h-button plain>朴素按钮</h-button>
      <h-button type="primary" plain>主要按钮</h-button>
      <h-button type="success" plain>成功按钮</h-button>
      <h-button type="info" plain>信息按钮</h-button>
      <h-button type="warning" plain>警告按钮</h-button>
      <h-button type="danger" plain>危险按钮</h-button>
    </div>
    <div>
      <h-button round>圆角按钮</h-button>
      <h-button type="primary" round>主要按钮</h-button>
      <h-button type="success" round>成功按钮</h-button>
      <h-button type="info" round>信息按钮</h-button>
      <h-button type="warning" round>警告按钮</h-button>
      <h-button type="danger" round>危险按钮</h-button>
    </div>
    <div>
      <h-button circle>⚠️</h-button>
      <h-button type="primary" circle>🔍</h-button>
    </div>
    <div>
      <h-button type="text">文字按钮</h-button>
      <h-button type="text" disabled>文字按钮</h-button>
    </div>
    <div>
      <h-button>默认按钮</h-button>
      <h-button size="medium">中等按钮</h-button>
      <h-button size="small">小型按钮</h-button>
      <h-button size="mini">超小按钮</h-button>
    </div>
    <div>
      <h-button disabled>默认按钮</h-button>
      <h-button type="primary" disabled>主要按钮</h-button>
      <h-button type="success" disabled>成功按钮</h-button>
      <h-button type="info" disabled>信息按钮</h-button>
      <h-button type="warning" disabled>警告按钮</h-button>
      <h-button type="danger" disabled>危险按钮</h-button>
    </div>
    <div>
      <h-button plain disabled>朴素按钮</h-button>
      <h-button type="primary" plain disabled>主要按钮</h-button>
      <h-button type="success" plain disabled>成功按钮</h-button>
      <h-button type="info" plain disabled>信息按钮</h-button>
      <h-button type="warning" plain disabled>警告按钮</h-button>
      <h-button type="danger" plain disabled>危险按钮</h-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HButton from "@/components/Hbutton/HButton.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HButtonHome",
  // components: {
  //   HButton,
  // },
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
