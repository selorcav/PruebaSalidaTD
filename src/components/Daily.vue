<template>
  <v-card class="my-8">
    <v-card-title> Cumplimiento diario de Ordenes </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-center">
          <h3 class="pa-2">{{ porcentaje }}%</h3>
          <a href="">Ver Detalle</a>
        </v-col>
        <v-col class="text-center">
          <h2 class="pa-2">{{ entregadas }}</h2>
          <p>Ordenes entregadas</p>
        </v-col>
        <v-col class="text-center">
          <h2 class="pa-2">{{ pendientes }}</h2>
          <p>Ordenes pendientes</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Daily",
  data() {
    return {
      entregadas: 0,
      pendientes: 0,
    };
  },
  computed: {
    porcentaje() {
      let resultado = 0;
      let total = 0;
      if (this.entregadas > 0) {
        total = parseInt(this.entregadas) + parseInt(this.pendientes)
        resultado = (this.entregadas * 100) / total;
      }
      return resultado.toFixed(0);
    },
  },
  methods: {
    fetchDaily() {
      axios
        .get("http://localhost:8080/api/dashboard.json")
        .then((resp) => {
          let daily = resp.data.kpis[0];
          // console.log(daily);
          this.entregadas = daily.entregadas;
          this.pendientes = daily.pendientes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchDaily();
  },
};
</script>

<style>
</style>