<template>
  <v-main>
    <Nav />
    <h3 class="my-8 mx-16">Inicio ➤ Monitor de Órdenes</h3>
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº Orden</th>
              <th class="text-left">Cliente</th>
              <th class="text-left">Monto Orden</th>
              <th class="text-left">Cant. Productos</th>
              <th class="text-left">Fecha Entrega</th>
              <th class="text-left">Avance Preparación</th>
              <th class="text-left">Estado</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.num_orden }}</td>
              <td>{{ order.cliente }}</td>
              <td>{{ order.monto }}</td>
              <td>{{ order.cant_productos }}</td>
              <td>{{ order.fecha_entrega }}</td>

              <td>
                <v-progress-linear
                  :value="order.avance_preparacion * 100"
                  color="blue-grey"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </td>
              <td>{{ order.estado }}</td>

              <td>
                <v-btn
                  x-small
                  color="primary"
                  @click="redirect(order.num_orden)"
                  >Ver detalle</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";
export default {
  name: "Orders",
  components: {
    Nav,
  },
  data() {
    return {
      orders: [],
      page: 1,
      total: 4,
    };
  },
  methods: {
    fetchOrders() {
      axios
        .get("http://localhost:8080/api/orders.json")
        .then((resp) => {
          this.orders = resp.data.ordenes;
          this.page = resp.data.pagedResult.page;
          this.total = resp.data.pagedResult.total;
          // console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    redirect(id) {
      this.$router.push(`/orden/${id}`);
    },
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<style>
</style>