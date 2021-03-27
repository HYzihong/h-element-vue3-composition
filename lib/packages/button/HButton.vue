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
import {
  defineComponent,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  // ref,
  // watch,
  // toRefs,
} from "vue";
// TODO: 图标 按钮组 跟form进行联动 使用lerna关系
// 怎么对传入的props 的数据进行校验？过滤？
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
    // console.log("context.attrs =>", ctx.attrs);

    // 插槽 (非响应式对象)
    // console.log("context.slots =>", ctx.slots);
    // attrs 和 slots 是有状态非响应式的对象，它们总是会随组件本身的更新而更新,避免对它们进行解构，并始终以 attrs.x 或 slots.x 的方式引用 property

    // 触发事件 (方法)
    // console.log("context.emit =>", ctx.emit);

    //  context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对context 使用 ES6 解构
    //  setup(props, { attrs, slots, emit }) { ... }

    // 通过一个新的 ref 函数使任何响应式变量在任何地方起作用
    // ref 接受参数并返回它包装在具有 value property 的对象中，然后可以使用该 property 访问或更改响应式变量的值：
    // 在对象中包装值似乎不必要，但在 JavaScript 中保持不同数据类型的行为统一是必需的。这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值传递的，而不是通过引用传递的：
    // 换句话说，ref 对我们的值创建了一个响应式引用。使用引用的概念将在整个组合式 API 中经常使用。
    // console.log("ref(number)", ref(0));
    // console.log("ref(string)", ref("sss"));
    // console.log("ref(array)", ref([2, 34]));
    // console.log(
    //   "ref(object)",
    //   ref({ a: 1, b: "1", c: `1`, d: { a: 1 }, e: [1, 2, 3] }).value
    // );

    // 不要使用this
    // 由于在执行 setup 时尚未创建组件实例，因此在 setup 选项中没有 this。这意味着，除了 props 之外，你将无法访问组件中声明的任何属性——本地状态、计算属性或方法。
    // 在 setup() 内部，this 不会是该活跃实例的引用，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这在和其它选项式 API 一起使用 setup() 时可能会导致混淆。
    // console.log("this =>", this);

    // reactive state
    // const count = ref(1);
    // 创建一个响应式的 count 变量
    // watch(count, (newValue, oldValue) => {
    //   console.log("newValue =>", newValue);
    //   console.log("oldValue =>", oldValue);
    //   console.log("The new counter value is: " + count.value);
    // });
    // watch(
    //   () => count.value * 2,
    //   (val) => {
    //     console.log(`count * 2 is ${val}`);
    //   }
    // );

    // 使用 `toRefs` 创建对prop的 `disabled` property 的响应式引用
    // const { disabled } = toRefs(props);

    // lifecycle
    // 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。
    // created(() => { /*Not needed**/
    //   console.log("create");
    // });
    // beforeMount
    onBeforeMount(() => {
      console.log("Component is beforeMount");
    });
    // mounted
    onMounted(() => {
      console.log("Component is mounted");
    });
    // onMounted(asyncFunc)
    // beforeUpdate
    onBeforeUpdate(() => {
      console.log("Component is beforeUpdate");
    });
    // updated
    onUpdated(() => {
      console.log("Component is updated");
    });
    // beforeUnmount
    onBeforeUnmount(() => {
      console.log("Component is beforeUnmount");
    });
    // unmounted
    onUnmounted(() => {
      console.log("Component is unmounted");
    });
    // errorCaptured
    onErrorCaptured(() => {
      console.log("Component is errorCaptured");
    });
    // renderTracked
    onRenderTracked(() => {
      console.log("Component is renderTracked");
    });
    // renderTriggered
    onRenderTriggered(() => {
      console.log("Component is renderTriggered");
    });

    //methods
    const handleClick = (evt: Event) => {
      ctx.emit("click", evt);
    };

    // const asyncFunc = async () => {
    //    count.value = await fetchData()
    // };

    // expose to template
    return {
      // asyncFunc,
      // count,
      handleClick,
    };
  },
  beforeCreate() {
    console.log("Component is beforeCreate");
  },
  created() {
    console.log("Component is created");
    // this.count++;
  },
  // methods: {
  //   handleClick(e: Event): void {
  //     this.$emit("click", e);
  //   },
  // async fetchData(){
  //   await
  // }
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
