<template>
  <v-main>
    <Nav />
    <h3 class="my-8 mx-16">Inicio</h3>
    <v-container>
      <Jumbo />
      <v-row>
        <v-col cols="12" md="6">
          <Daily />
        </v-col>
        <v-col cols="12" md="6">
          <Delay />
        </v-col>
        <v-col cols="12" md="6">
          <LastOrders />
        </v-col>
        <v-col cols="12" md="6">
          <LastRefunds />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Jumbo from "@/components/Jumbo.vue";
import Daily from "@/components/Daily.vue";
import Delay from "@/components/Delay.vue";
import LastOrders from "@/components/LastOrders.vue";
import LastRefunds from "@/components/LastRefunds.vue";

export default {
  name: "Dashboard",
  components: {
    Nav,
    Jumbo,
    Daily,
    Delay,
    LastOrders,
    LastRefunds
  },
};
</script>

<style>
</style>