<template>
<v-app>
<navbar/>
<profile/>
</v-app>
</template>

<script>
import navbar from '../components/navbar'
import profile from '../components/MemeProfile/Profile'

  export default {
    name: 'MemeProfile',

    components: {
      navbar, profile
    },
  }
</script>
