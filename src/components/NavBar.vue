<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" active-class="active" style="color:#28a745;">
      <a class="navbar-brand">Stock Trader</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/Portfolio" tag="li" active-class="active">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link to="/Stocks" tag="li" active-class="active">
          <a class="nav-link">Stocks</a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End day</a>
        </li>
        <li class="nav-item">
          <span class="nav-link">Funds: ${{funds}}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      funds: "getFunds"
    })
  },
  methods: {
    endDay() {
      this.$store.dispatch("randomizeStockPrices");
    }
  }
};
</script>
