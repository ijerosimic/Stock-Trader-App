<template>
  <div class="col-lg-6 col-md-12 col-xs-12">
    <div class="card">
      <div class="card-header">{{stockName}} (Price: {{stockPrice}})</div>
      <div class="card-body">
        <div class="form-group row">
          <div class="col-lg-8 col-md-8 col-xs-8" style="padding-bottom: 1em;">
            <input type="number" v-model.number="boughtStock.quantity" class="form-control" min="0">
          </div>
          <div class="col-lg-4 col-md-4 col-xs-4">
            <button
              class="btn btn-danger btn-block"
              @click="buyStocks(boughtStock)"
              :disabled="boughtStock.quantity <= 0"
            >Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    stockName: String,
    stockPrice: Number
  },
  data() {
    return {
      boughtStock: {
        stockName: this.stockName,
        quantity: 0,
        price: this.stockPrice
      }
    };
  },
  methods: {
    ...mapActions({
      buyStocks: "buyStocks"
    })
  }
};
</script>

<style scoped>
.card {
  margin: 1em;
}
</style>


