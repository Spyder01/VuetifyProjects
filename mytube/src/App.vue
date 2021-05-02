<template>
  <v-app>
   <navbar/>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
export default {
  name: 'App',

  components: {
    navbar
  },
  theme: {
    dark: true
  },
  data () {
    return {
      background: '#191919'
    }
  },
  props: {
  }
}
</script>

<style scoped>

body {
  background-color: #181818;
}
.theme--light.v-application {
 background-color: #181818; 
}

</style>