<template>
  <v-card>
    <v-card-title> Últimas Ordenes </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº de Orden</th>
              <th class="text-left">Cliente</th>
              <th class="text-left">Fecha entrega</th>
              <th class="text-left">Estado</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.cliente }}</td>
              <td>{{ order.estado }}</td>
              <td>{{ order.fecha_entrega }}</td>
              <td>{{ order.num_orden }}</td>
              <td><v-btn x-small color="primary">Ver detalle</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    fetchOrders() {
      axios
        .get("http://localhost:8080/api/dashboard.json")
        .then((resp) => {
          this.orders = resp.data.utimas_ordenes
          // console.log(this.orders);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<style>
</style>