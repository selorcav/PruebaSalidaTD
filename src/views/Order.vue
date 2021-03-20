<template>
  <v-main>
    <Nav />
    <h3 class="my-8 mx-16">
      Inicio ➤ Monitor de vendedores ➤ Ficha Vendedor {{ id }}
    </h3>
    <v-container>
      <v-card color="basil">
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab> General </v-tab>
          <v-tab> Datos Cliente </v-tab>
          <v-tab> Producto </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card color="basil" flat>
              <v-card-text>
                <General :general="general" />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card color="basil" flat>
              <v-card-text>
                <Client :client="client" />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card color="basil" flat>
              <v-card-text>
                <Product :product="product" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";
import General from "@/components/General.vue";
import Client from "@/components/Client.vue";
import Product from "@/components/Product.vue";

export default {
  name: "Order",
  props: ["id"],
  components: {
    Nav,
    General,
    Client,
    Product
    // Cartera,
    // Cumplimiento,
  },
  data() {
    return {
      tab: null,
      general: {},
      client: {},
      product: {}
    };
  },
  methods: {
    fetchOrder() {
      axios
        .get("http://localhost:8080/api/order.json")
        .then((resp) => {
          console.log(resp);
          this.general = resp.data.orden;
          this.client = resp.data.cliente
          this.product = resp.data.productos
          // console.log(this.product)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchOrder();
  },
};
</script>

<style>
</style>