<template>
  <div class="card">
    <div class="card-body">
      <h3>Trade or View your Portfolio</h3>
      <p>Click on 'End day' to begin a new Day!</p>
      <hr>
      <p class="lead">
        <strong>Your Funds: ${{getFunds}}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getFunds: "getFunds"
    })
  }
};
</script>
