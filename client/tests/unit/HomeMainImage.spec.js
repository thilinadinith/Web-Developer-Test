import { shallowMount } from "@vue/test-utils";
import HomeMainImage from "@/components/HomeMainImage";

describe("HomeMainImage.vue", () => {
  const compData = {
    desktopImageurl: '../assets/images/homepage-feature-extra-large-3.png',
    mobileImageurl: '../assets/images/mobile-image.png',
    subText: "APPS unveils new studio",
    headerText: "Lagom"
  };
  it("renders image when image data passed", () => {
    const wrapper = shallowMount(HomeMainImage, {
      props: { compData },
    });
    expect(wrapper.find(".desktop").attributes("src")).toBe(compData.desktopImageurl)
  });
  it("renders mobile image when mobile image data passed", () => {
    const wrapper = shallowMount(HomeMainImage, {
      props: { compData },
    });
    expect(wrapper.find(".mobile").attributes("src")).toBe(compData.mobileImageurl)
  });
  it("renders header text when headeText data passed", () => {
    const wrapper = shallowMount(HomeMainImage, {
      props: { compData },
    });
    expect(wrapper.find("h1").text()).toMatch(compData.headerText)
  });
  it("renders sub text when subText data passed", () => {
    const wrapper = shallowMount(HomeMainImage, {
      props: { compData },
    });
    expect(wrapper.find("p").text()).toMatch(compData.subText)
  });

});
