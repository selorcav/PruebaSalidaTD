<template>
  <v-card>
    <v-card-title> Últimas Devoluciones </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº de Orden</th>
              <th class="text-left">Cliente</th>
              <th class="text-left">Fecha de Devolución</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="refund in refunds" :key="refund.id">
              <td>{{ refund.num_orden }}</td>
              <td>{{ refund.cliente }}</td>
              <td>{{ refund.fecha_entrega }}</td>
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
      refunds: [],
    };
  },
  methods: {
    fetchRefunds() {
      axios
        .get("http://localhost:8080/api/dashboard.json")
        .then((resp) => {
          this.refunds = resp.data.ultimas_devoluciones;
          console.log(this.refunds);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchRefunds();
  },
};
</script>

<style>
</style>