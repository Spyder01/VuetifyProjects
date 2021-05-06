<template>
    <v-app>
    <navbar />
    <RowColumn />
  </v-app>
</template>

<script>
import navbar from '../components/navbar'
import RowColumn from '../components/MemeGenerator/RowColumns'

export default {
  name: 'MemeGenerator',
  components: {
     navbar, RowColumn
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');


</style>
