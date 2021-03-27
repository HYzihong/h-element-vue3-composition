<template>
  <button
    class="h-button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      type ? 'h-button--' + type : '',
      size ? 'h-button--' + size : '',
      {
        'is-disable': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  name: "HButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      // medium,small,mini
      type: String,
      default: "",
    },
    disabled: Boolean,
    plain: Boolean,
    circle: Boolean,
    round: Boolean,
  },
  emits: ["click"],

  // 文档地址 : https://vue3js.cn/docs/zh/guide/composition-api-setup.html#参数
  // setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新。
  // 执行 setup 时，组件实例尚未被创建 property：props、attrs、slots、emit
  // 无法访问 data、computed、methods
  setup(props, ctx) {
    // props
    // 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。 Getting a value from the `props` in root scope of `setup()` will cause the value to lose reactivity
    // const { type, size, disabled } = props;
    // console.log(type, size, disabled);

    // 解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作
    // const { type } = toRefs(props);
    // console.log(type.value);

    // console.log(props, ctx);

    // context
    // Attribute (非响应式对象)
    console.log("context.attrs =>", ctx.attrs);

    // 插槽 (非响应式对象)
    console.log("context.slots =>", ctx.slots);
    // attrs 和 slots 是有状态非响应式的对象，它们总是会随组件本身的更新而更新,避免对它们进行解构，并始终以 attrs.x 或 slots.x 的方式引用 property

    // 触发事件 (方法)
    console.log("context.emit =>", ctx.emit);

    //  context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对context 使用 ES6 解构
    //  setup(props, { attrs, slots, emit }) { ... }

    // console.log("ref(number)", ref(0));
    // console.log("ref(string)", ref("sss"));
    // console.log("ref(array)", ref([2, 34]));
    // console.log(
    //   "ref(object)",
    //   ref({ a: 1, b: "1", c: `1`, d: { a: 1 }, e: [1, 2, 3] }).value
    // );

    // 不要使用this
    // 在 setup() 内部，this 不会是该活跃实例的引用，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这在和其它选项式 API 一起使用 setup() 时可能会导致混淆。
    // console.log("this =>", this);

    //methods
    const handleClick = (evt: Event) => {
      ctx.emit("click", evt);
    };

    // expose to template
    return {
      handleClick,
    };
  },
  // methods: {
  //   handleClick(e: Event): void {
  //     this.$emit("click", e);
  //   },
  // },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.h-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.h-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &.is-disable {
      color: #8cc5ff;
      background-color: #ecf5ff;
      border-color: #d9ecff;
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-disable {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    cursor: not-allowed;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
}
.h-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  &.is-disable {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: transparent;
  }
}
.h-button--mini {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
