<template>

<v-container>
    <v-row>
        <v-col>
      <v-footer
    dark
    app
    padless
    fixed
  >
    <v-card
      class="flex"
    
    >
      <v-card-title class="success">
        <strong class="subheading">Rozsály</strong> 
        <v-spacer></v-spacer>
  
      </v-card-title>

      <v-card-text class="py-2 white--text">
        <nuxt-link to="/adatvedelem" class="mr-5">Adatkezeléasi tájékoztató</nuxt-link>
        <nuxt-link to="/cookie">Sütitájékoztató</nuxt-link>
      </v-card-text>
    </v-card>
  </v-footer>

          </v-col>
    </v-row>
</v-container>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style>

</style>