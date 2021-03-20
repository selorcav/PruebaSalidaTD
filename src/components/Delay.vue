<template>
  <v-card class="my-8">
    <v-card-title> Ordenes Atrasadas Jornada </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-center">
          <h3 class="pa-2">{{ porcentaje }}%</h3>
          <a href="">Ver Detalle</a>
        </v-col>
        <v-col class="text-center">
          <h2 class="pa-2">{{ totales }}</h2>
          <p>Ordenes totales</p>
        </v-col>
        <v-col class="text-center">
          <h2 class="pa-2">{{ atrasadas }}</h2>
          <p>Ordenes Atrasadas</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Delay",
  data() {
    return {
      totales: 0,
      atrasadas: 0,
    };
  },
  computed: {
    porcentaje() {
      let resultado = 0;
      if (this.atrasadas > 0) {
        resultado = (this.atrasadas * 100) / this.totales;
      }
      return resultado.toFixed(0);
    },
  },
  methods: {
    fetchDelay() {
      axios
        .get("http://localhost:8080/api/dashboard.json")
        .then((resp) => {
          let delay = resp.data.kpis[1];
          // console.log(delay);
          this.atrasadas = delay.atrasadas
          this.totales = delay.totales
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchDelay();
  },
};
</script>

<style>
</style>