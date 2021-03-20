<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><b>Nombre </b></td>
            <td>{{ client.nombre }}</td>
          </tr>
          <tr>
            <td><b>Rut</b></td>
            <td>{{ client.rut_n }}</td>
          </tr>
          <tr>
            <td><b>Dirección Entrega</b></td>
            <td>{{ client.direccion_entrega }}</td>
          </tr>
          <tr>
            <td><b>Contacto</b></td>
            <td>{{ client.contacto }}</td>
          </tr>
          <tr>
            <td><b>Fono</b></td>
            <td>{{ client.fono }}</td>
          </tr>
          <tr>
            <td><b>Email</b></td>
            <td>{{ client.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Client",
  props: {
    client: {
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