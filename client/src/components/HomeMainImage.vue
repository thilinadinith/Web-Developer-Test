<template>
  <div class="bg">
    <img class="desktop" :src="compData.desktopImageurl" />
    <img class="mobile" :src="compData.mobileImageurl" />
    <div class="text">
      <p class="sm">{{ compData.subText }}</p>
      <h1>{{ compData.headerText }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
  }
  .text {
    position: absolute;
    top: calc(100vw - 65vw);
    left: 15%;
    h1 {
      font-weight: 200;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.07;
      letter-spacing: -1px;
      color: #fff;
    }

    .sm {
      margin: 0px;
      font-weight: 500;
      opacity: 0.87;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: 0.08px;
      color: var(--pale-white) !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .bg {
    flex-direction: column-reverse;
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
    img {
      height: 100%;
      width: 100%;
    }
    .text {
      top: calc(100vw - 40vw);
    }
  }
}
</style>

<script>
export default {
  name: "HomeMainImage",
  props: {
    compData: {
      imageurl: {
        type: String,
        default: "",
      },
      subText: {
        type: String,
        default: "this is a sub text",
      },
      headerText: {
        type: String,
        default: "this is a header text",
      },
    },
  },
};
</script>