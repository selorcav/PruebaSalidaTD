<template>
  <div>
    <v-card>
      <v-toolbar prominent dense class="rounded-0">
        <v-toolbar-title>
          <v-img src="../assets/logo.svg" height="70px" width="80px"></v-img>
        </v-toolbar-title>
        <v-toolbar-items class="mx-5 d-none d-md-block">
          <v-btn
            elevation="0"
            color="blue lighten-5"
            @click="$router.push('/inicio')"
            >Home</v-btn
          >
          <v-btn
            elevation="0"
            color="blue lighten-5"
            @click="$router.push('/ordenes')"
            >Ordenes</v-btn
          >
          <v-btn
            elevation="0"
            color="blue lighten-5"
            @click="$router.push('/inventario')"
            >Inventario</v-btn
          >
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="d-none d-md-block">
          <v-btn dark elevation="0" color="blue darken-1">Profile</v-btn>
          <v-btn
            dark
            elevation="0"
            color="blue darken-1"
            @click="$router.push('/')"
            >Logout</v-btn
          >
        </v-toolbar-items>

        <v-toolbar-items class="d-block d-md-none">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-img src="../assets/logo.svg" height="195px" width="70px"></v-img>
          </v-list-item>
          <v-list-item class="mt-8">
            <v-list-item-title>
              <v-btn
                elevation="0"
                block
                color="blue lighten-5"
                @click="$router.push('/inicio')"
                >Home</v-btn
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                elevation="0"
                block
                color="blue lighten-5"
                @click="$router.push('/ordenes')"
                >Ordenes</v-btn
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                elevation="0"
                block
                color="blue lighten-5"
                @click="$router.push('/inventario')"
                >Inventario</v-btn
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn dark elevation="0" block color="blue darken-1"
                >Profile</v-btn
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                dark
                elevation="0"
                block
                color="blue darken-1"
                @click="$router.push('/')"
                >Logout</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
</style>