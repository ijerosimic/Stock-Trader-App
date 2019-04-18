<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-xs-12">
      <div class="row">
        <app-portfolio
          v-for="(stock, name) in stocks"
          :qty="stock.quantity"
          :price="stock.price"
          :name="name"
          :key="stock.id"
        ></app-portfolio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OwnedStocks from "./PortfolioCards";
export default {
  components: {
    appPortfolio: OwnedStocks
  },
  computed: {
    ...mapGetters({
      stocks: "getPortfolio"
    })
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
