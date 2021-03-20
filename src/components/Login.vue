<template>
  <v-row class="ma-0">
    <v-col class="login-bg d-flex justify-center align-center" cols="12">
      <v-container class="d-flex justify-center align-center flex-column">
        <h1 class="white--text px-8 text--shadow">
          Welcome to the ClassicModels Order <br />
          access Portal
        </h1>
        <v-col cols="11" md="6">
          <v-card elevation="3" rounded="xl" class="mx-auto pt-8">
            <v-img
              class="mx-auto"
              src="../assets/logo.svg"
              max-height="135"
              max-width="150"
            />
            <v-form ref="form" v-model="valid" class="pa-8" lazy-validation>
              <v-card-title> Please login to Continue </v-card-title>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Password"
                v-model="pass"
                class="input-group--focused"
                @click:append="show = !show"
              ></v-text-field>

              <v-card-actions>
                <v-btn
                  class="px-4"
                  elevation="4"
                  dark
                  block
                  rounded
                  color="blue"
                  @click="submit"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>

            <v-card-text>
              username: usuario@classicmodels.com<br />
              password: abc123
            </v-card-text>
          </v-card>
        </v-col>
      </v-container>
      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        {{ textSnackbar }}

        <template v-slot:action="{ attrs }">
          <v-btn color="purple" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      name: "Login",
      show: false,
      pass: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      snackbar: false,
      multiLine: true,
      textSnackbar: `Invalid Username or Password`,
    };
  },
  methods: {
    ...mapActions(["setUserData"]),
    validate() {
      this.$refs.form.validate();
    },
    submit() {
      if (this.validate() === false) return;

      axios
        .get("http://localhost:8080/api/login.json")
        .then((resp) => {
          console.log(resp.data);
          let user = resp.data;
          if (user.email == this.email && user.pass == this.pass) {
            this.setUserData(user);
            this.$router.push("/inicio");
            this.snackbar = false;
          } else {
            this.snackbar = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="sass" >
.text--shadow
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
</style>