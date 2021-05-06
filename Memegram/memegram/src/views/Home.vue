<template>
<v-app>
<navbar/>
<profile/>
<RowColumn/>

</v-app>
</template>

<script>
import navbar from '../components/navbar'
import profile from '../components/MemeProfile/Profile'
import RowColumn from '../components/MemeProfile/RowColumn'

  export default {
    name: 'MemeProfile',

    components: {
      navbar, profile, RowColumn
    },
  }
</script>
