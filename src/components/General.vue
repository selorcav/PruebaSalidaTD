<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><b>Nº Orden </b></td>
            <td>{{ general.num_orden }}</td>
          </tr>
          <tr>
            <td><b>Monto Orden</b></td>
            <td>{{ general.monto }}</td>
          </tr>
          <tr>
            <td><b>Cant. Productos</b></td>
            <td>{{ general.cant_productos }}</td>
          </tr>
          <tr>
            <td><b>Fecha Entrega</b></td>
            <td>{{ general.fecha_entrega }}</td>
          </tr>
          <tr>
            <td><b>Vendedor</b></td>
            <td>{{ general.vendedor }}</td>
          </tr>
          <tr>
            <td><b>Estado</b></td>
            <td>{{ general.estado }}</td>
          </tr>
          <tr>
            <td><b>Avance preparación</b></td>
            <v-progress-linear
              :value="general.avance_preparacion * 100"
              color="blue-grey"
              height="25"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "General",
  props: {
    general: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>