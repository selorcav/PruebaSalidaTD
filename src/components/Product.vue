<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Cod. Producto</th>
            <th class="text-left">Descripción</th>
            <th class="text-left">Precio Unit.</th>
            <th class="text-left">Cant. Pedido</th>
            <th class="text-left">Cant. Pickeado</th>
            <th class="text-left">Cumplimiento</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in product" :key="prod.id">
            <td>{{ prod.cod_prod }}</td>
            <td>{{ prod.descripcion }}</td>
            <td>{{ prod.precio_unit }}</td>
            <td>{{ prod.cant_pedido }}</td>
            <td>{{ prod.cant_pickeado }}</td>
            <td>
              <v-progress-linear
                :value="(prod.cant_pickeado *100)/prod.cant_pedido"
                color="blue-grey"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Array,
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