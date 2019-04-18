<template>
  <div class="col-lg-6 col-md-12 col-xs-12">
    <div class="card">
      <div class="card-header">{{name}} (Price: {{price}} | Qty: {{qty}})</div>
      <div class="card-body">
        <div class="form-group row">
          <div class="col-lg-8 col-md-8 col-xs-8" style="padding-bottom: 1em;">
            <input type="number" class="form-control" v-model.number="stocks.quantity" min="0">
          </div>
          <div class="col-lg-4 col-md-4 col-xs-4">
            <button
              class="btn btn-success btn-block"
              @click="sellStocks(stocks)"
              :disabled="stocks.quantity <= 0 || stocks.quantity > qty"
            >Sell</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    name: String,
    qty: Number,
    price: Number
  },
  data() {
    return {
      stocks: {
        name: this.name,
        quantity: 0,
        price: this.price
      }
    };
  },
  methods: {
    ...mapActions({
      sellStocks: "sellStocks"
    })
  }
};
</script>

<style scoped>
.card {
  margin: 1em;
}
</style>


