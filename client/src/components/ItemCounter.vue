<template>
  <div class="item-counter-block cart-base-font">
    <div class="item-counter">
      <span @click="click('-')"> - </span>
      <input
        min="1"
        type="Number"
        @blur="removeDecimalsFunc($event)"
        :value="count"
      /><span @click="click('+')">+</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-counter-block {
  display: flex;
  justify-content: center;
  .item-counter {
    padding: 5px 10px;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: var(--dodger-blue);
    border-radius: 3px;
    span {
      padding: 10px;
      color: var(--dodger-blue);
      cursor: pointer;
    }
    input {
      width: 40px;
      padding: 0;
      border: none;
      margin: 0px;
      text-align: center;
      font-size: 12px;
      font-family: LibreFranklin;
    }
  }
}
@media screen and (max-width: 768px) {
  .item-counter-block {
    float: right;
  }
}
</style>

<script>
import { removeDecimals } from "@/mixin/mixin-utils";
export default {
  name: "ItemCounter",
  setup() {},
  data() {
    return {};
  },
  props: {
    count: { type: Number },
    stockLevel: { type: Number },
  },
  mounted() {},
  computed: {},
  methods: {
    click: function (type) {
      if (type == "-") {
        if (this.count <= 1) return;
        this.$emit("changeCount", this.count - 1);
      } else {
        if (this.count >= this.stockLevel) return;
        this.$emit("changeCount", this.count + 1);
      }
    },

    removeDecimalsFunc: function (event) {
      let countTemp = 1;
      if (event.target.value != "") {
        countTemp = removeDecimals(event.target.value);
        if (countTemp < 1) countTemp = this.count;
        else if (countTemp > this.stockLevel) countTemp = this.stockLevel;
      } else countTemp = this.count;

      event.target.value = countTemp;
      this.$emit("changeCount", countTemp);
    },
  },
};
</script>
