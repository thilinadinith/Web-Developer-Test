<template>
  <b-row class="cart-table cart-base-font">
    <b-col cols="12" lg="3" md="3" sm="12" class="grey-border">
      {{ item.name }}, {{ size }}
    </b-col>
    <b-col cols="12" lg="3" md="3" sm="12">
      <b-row>
        <b-col cols="6" sm="6" class="cart-item-label">Price</b-col>
        <b-col cols="6" sm="6" lg="12" md="12">{{ item.price }}</b-col>
      </b-row>
    </b-col>
    <b-col cols="12" lg="3" md="3" sm="12">
      <b-row>
        <b-col cols="3" sm="6" class="cart-item-label">Items</b-col>
        <b-col cols="9" sm="6" lg="12" md="12"
          ><ItemCounter
            :count="count"
            :stockLevel="item.stockLevel"
            @changeCount="updateCount"
          ></ItemCounter
        ></b-col>
      </b-row>
    </b-col>
    <b-col cols="12" lg="2" md="2" sm="12">
      <b-row>
        <b-col cols="6" sm="6" class="cart-item-label">Cost</b-col>
        <b-col cols="6" sm="6" lg="12" md="12"> {{ cost }} </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" lg="1" md="1" sm="12">
      <b-row>
        <b-col cols="6" sm="6" class="cart-item-label">Price</b-col>
        <b-col cols="6" sm="6" lg="12" md="12">
          <i class="icon-delete-cart" @click="deleteItem(item)"></i>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped lang="scss">
.cart-table {
  i {
    font-size: 16px;
    float: right;
    padding: 5px;
    color: var(--dodger-blue);
  }
  .cart-item-label {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .cart-item-label {
    display: block !important;
  }
  .cart-table {
    .col {
      padding-top: 0px;
      padding-bottom: 0px;

      &:first-child {
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
      &:last-child {
        padding-bottom: 20px;
      }
      .row {
        align-items: center;
        .col {
          padding-top: 0px;
          padding-bottom: 0px;
          &:last-child {
            text-align: right;
          }
        }
      }
    }
    .grey-border {
      border-width: 0px 0px 2px 0px;
      border-style: solid;
      border-color: var(--cart-table-border);
    }
  }
}
</style>

<script>
import ItemCounter from "@/components/ItemCounter";

export default {
  name: "CartItem",
  components: {
    ItemCounter,
  },
  setup() {},
  data() {
    return {
      count: 1,
    };
  },
  props: {
    item: { type: Object },
  },
  mounted() {
    this.count = 1;
  },
  computed: {
    cost() {
      let totalcost = this.item.price * this.count;
      // this.updateCost(totalcost , this.item.sku);
      totalcost = totalcost.toFixed(2);
      return totalcost;
    },
    size() {
      if (this.item.size == undefined) return "one size";
      return this.item.size;
    },
  },
  methods: {
    updateCount: function (count) {
      this.count = count;
      this.$emit("updateCost", this.cost, this.item.sku);
    },
    deleteItem: function (item) {
      this.$emit("delete-item", item);
    },
  },
};
</script>
