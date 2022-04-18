<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <h1>Story Book</h1>

        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/buttons'>Buttons</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/cards'>Cards</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/dropdowns'>Dropdowns</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/inputs'>Inputs</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/lists'>Lists</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/menus'>Menus</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/modals'>Modals</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/pickers'>Pickers</router-link>
        <v-divider class="mx-5" vertical></v-divider>
        <router-link class="nav-link" to='/progress'>Progress</router-link>
        <v-divider class="mx-5" vertical></v-divider>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      //
    }),
  };
</script>

<style scoped>
  .nav-link {
    color: white !important;
  }
</style>