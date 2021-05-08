<template>
<v-app v-touch:swipe.right='MemeGen'>
<navbar/>
<profile/>
<RowColumn/>
<BottomBar/>
</v-app>
</template>

<script>
import navbar from '../components/navbar'
import profile from '../components/MemeProfile/Profile'
import RowColumn from '../components/MemeProfile/RowColumn'
import BottomBar from '../components/Bottombar'
  export default {
    name: 'MemeProfile',

    components: {
      navbar, profile, RowColumn, BottomBar
    },
    methods: {
        MemeGen () {
            this.$router.push('/')
        }
    }
  }
</script>
