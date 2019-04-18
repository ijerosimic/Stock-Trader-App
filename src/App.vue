<template>
  <div id="app" class="container">
    <br>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-12">
        <app-navbar></app-navbar>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SweetAlert from "../node_modules/vue-sweetalert2";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Stocks from "./components/Stocks";
export default {
  components: {
    appNavbar: NavBar
  },
  created() {
    this.$store.dispatch("getFundsFromApi");
    this.$store.dispatch("getStocksFromApi");
    this.$store.dispatch("getPortfolio");
  }
};
</script>

<style>
</style>
