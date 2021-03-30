import { mount } from "@vue/test-utils";
import HButton from "../../src/components/HButton/HButton.vue";

const SLOT_DEFAULT = "This HHButton";

describe("HHButton.vue", () => {
  // type
  it("create default type", () => {
    const wrapper = mount(HButton, {
      props: { type: "primary" },
    });
    expect(wrapper.classes()).toEqual(["h-button", "h-button--primary"]);
  });
  it("size", () => {
    const wrapper = mount(HButton, {
      props: { size: "medium" },
    });
    expect(wrapper.classes()).toEqual([
      "h-button",
      "h-button--default",
      "h-button--medium",
    ]);
  });
  it("plain", () => {
    const wrapper = mount(HButton, {
      props: { plain: true },
    });
    expect(wrapper.classes()).toContain("is-plain");
  });
  it("round", () => {
    const wrapper = mount(HButton, {
      props: { round: true },
    });
    expect(wrapper.classes()).toContain("is-round");
  });
  it("circle", () => {
    const wrapper = mount(HButton, {
      props: { circle: true },
    });
    expect(wrapper.classes()).toContain("is-circle");
  });
  // slot
  test("render text", () => {
    const instance = mount(HButton, {
      slots: {
        default: SLOT_DEFAULT,
      },
    });
    expect(instance.text()).toEqual(SLOT_DEFAULT);
  });
  // clikc
  test("handle click", async () => {
    const instance = mount(HButton, {
      slots: {
        default: SLOT_DEFAULT,
      },
    });
    await instance.trigger("click");
    expect(instance.emitted()).toBeDefined();
  });
});
