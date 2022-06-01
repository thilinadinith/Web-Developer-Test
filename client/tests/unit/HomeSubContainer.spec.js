import { shallowMount } from "@vue/test-utils";
import HomeSubContainer from "@/components/HomeSubContainer";

describe("HomeSubContainer.vue", () => {
  const data = {
        imageurl: "",
        subTextOne: "Apps is an innovation and experience design agency.",
        subTextTwo: "We exist to create a better future with you.",
        headerText: "Innovation and experience design agency.",
        buttonText: "Products",
  };
  it("renders no image when no image data passed", () => {
    const wrapper = shallowMount(HomeSubContainer, {
      props: { compData:data },
    });
    expect(wrapper.find("img").attributes("src")).toBe("");
  });
  it("renders header text when headerText data passed", () => {
    const wrapper = shallowMount(HomeSubContainer, {
      props: { compData:data },
    });
    expect(wrapper.find("h2").text()).toMatch(data.headerText);
  });
  it("renders sub text when subText data passed", () => {
    const wrapper = shallowMount(HomeSubContainer, {
      props: { compData:data },
    });
    expect(wrapper.find(".sub-text").text()).toMatch(data.subTextOne);
  });
  it("renders sub text when subText data passed", () => {
    const wrapper = shallowMount(HomeSubContainer, {
      props: { compData:data },
    });
    expect(wrapper.find(".sub-text:last-child").text()).toMatch(data.subTextTwo);
  });

});
