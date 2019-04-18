<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-xs-12">
      <div class="row">
        <app-cards
          v-for="(stock, name) in stocks"
          :stockPrice="stock.price"
          :stockName="name"
          :key="stock.id"
        ></app-cards>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cards from "./StockCards";
export default {
  components: {
    appCards: Cards
  },
  computed: {
    ...mapGetters({
      stocks: "getStocks"
    })
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
