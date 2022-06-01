<template>
  <div class="component-container">
    <div class="container">
      <b-row>
        <b-col cols="12"><h3>Your Basket</h3></b-col>
        <b-col cols="12"
          ><p class="cart-subtext-font">
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing purchase.
          </p></b-col
        >
      </b-row>
      <b-row class="cart-table titles cart-base-font grey-border-bottom">
        <b-col cols="3">Product</b-col>
        <b-col cols="3">Price</b-col>
        <b-col cols="3">Quantity</b-col>
        <b-col cols="2">Cost</b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <div v-for="item in this.items" v-bind:key="item.sku">
        <CartItem
          :key="item.sku"
          :item="item"
          @updateCost="updateItemCost"
          v-if="item.stockLevel > 0"
          @delete-item="deleteItem"
        ></CartItem>
      </div>
      <b-row class="cart-table total-values cart-base-font">
        <b-col cols="9" md="9" lg="9">Subtotal</b-col>
        <b-col cols="3" md="2" lg="2">{{ subTotal }}</b-col>
      </b-row>
      <b-row class="cart-table total-values cart-base-font">
        <b-col cols="9" md="9" lg="9">VAT at 20%</b-col>
        <b-col cols="3" md="2" lg="2">{{ vatTotal }}</b-col>
      </b-row>
      <b-row class="cart-table total-values cart-base-font">
        <b-col cols="9" md="9" lg="9">Total cost</b-col>
        <b-col cols="3" md="2" lg="2">{{ totalCost }}</b-col>
      </b-row>

      <b-row class="cart-action cart-base-font">
        <b-col offset="8" offset-md="9" offset-lg="9" md="3" cols="4" lg="3">
          <b-button
            variant="primary"
            :disabled="subTotal == 0"
            @click="BuyNow()"
          >
            Buy Now</b-button
          >
        </b-col>
      </b-row>

      <b-row class="status-msg" :class="{ show: successMsg !== '' }">
        <b-alert variant="success" show
          >You bought items successfully !</b-alert
        >
      </b-row>
    </div>
  </div>
</template>

<style  lang="scss">
.container {
  padding-top: 116px;
  .cart-action {
    padding: 10px;
  }
  .status-msg {
    display: none;
  }
  .show {
    display: block;
    .alert {
      text-align: center;
    }
  }
}
h3 {
  color: var(--black-87);
}
.xs-medium {
  text-align: left;
}
.cart-table {
  align-items: center;
  .col {
    text-align: center;
    padding: 10px;
    &:first-child {
      text-align: left;
    }
    &:last-child(-1) {
      text-align: right;
    }
  }
}
.total-values {
  .col {
    &:last-child {
      text-align: center;
    }
  }
}
.cart-action {
  .col {
    &:last-child {
      text-align: center;
    }
  }
}
.titles {
  padding-bottom: 10px;
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 690px !important;
  }
}
@media screen and (min-width: 992px) {
  .container {
    max-width: 690px !important;
  }
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 690px !important;
  }
}
@media screen and (max-width: 768px) {
  .titles {
    display: none;
  }
  .container {
    padding: 0px 20px;
    .cart-table {
      padding: 0px 3px;
    }
    .total-values {
      .col {
        &:last-child {
          text-align: right;
        }
      }
    }
    .cart-action {
      padding: 40px 0px 30px 0px;
      .col {
        &:last-child {
          text-align: right;
        }
      }
    }
  }
  .cart-subtext-font {
    text-align: left;
  }
}
</style>

<script>
import CartItem from "@/components/CartItem";
import cartService from "@/services/cartService";
import { roundNumbers } from "@/mixin/mixin-utils";
export default {
  data() {
    return {
      items: [],
      successMsg: "",
      subTotal: 0,
    };
  },
  setup() {},
  components: { CartItem },
  created() {
    this.getCartData();
  },
  mounted() {
    this.updateSubTotal();
  },

  watch: {
    items() {
      this.updateSubTotal();
    },
  },

  computed: {
    vatTotal() {
      return roundNumbers(this.subTotal * 0.2);
    },
    totalCost() {
      return roundNumbers(this.subTotal + this.vatTotal);
    },
  },
  methods: {
    async getCartData() {
      cartService.getCartData().then(
        ((data) => {
          this.items = data.items;
        }).bind(this)
      );
    },
    async BuyNow() {
      debugger;
      let data = this.getPostData();
      cartService.postCartData(data).then(
        ((data) => {
          this.successMsg = data.status;
        }).bind(this)
      );
    },
    updateItemCost: function (totalCost, sku) {
      const res = this.items.map((data) => {
        if (data.sku === sku) {
          return { ...data, totalCost: roundNumbers(totalCost) };
        } else {
          return data;
        }
      });
      this.items = res;
    },
    updateSubTotal: function () {
      let total = 0;
      this.items.forEach((item) => {
        if (item.totalCost != undefined)
          total = roundNumbers(total + item.totalCost);
        else {
          if (item.stockLevel != 0) total = roundNumbers(total + item.price);
        }
      });
      this.subTotal = total;
    },
    deleteItem: function (value) {
      this.items = this.items.filter(function (item) {
        return item.sku !== value.sku;
      });
    },
    getPostData: function () {
      return {
        items: this.items,
        subTotal: this.subTotal,
        vatTotal: this.vatTotal,
        totalCost: this.totalCost,
      };
    },
  },
};
</script>
