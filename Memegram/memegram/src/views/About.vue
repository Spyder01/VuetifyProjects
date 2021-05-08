<template>
    <v-app v-touch:swipe.left='ProfileGen'>
    <navbar />
    <RowColumn />
    <BottomBar/>
  </v-app>
</template>

<script>
import navbar from '../components/navbar'
import RowColumn from '../components/MemeGenerator/RowColumns'
import BottomBar from '../components/Bottombar'

export default {
  name: 'MemeGenerator',
  components: {
     navbar, RowColumn, BottomBar
  },
  methods: {
      ProfileGen () {
            this.$router.push('memes')
        }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');


</style>
