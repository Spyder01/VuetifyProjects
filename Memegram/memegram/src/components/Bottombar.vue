<template>
    <v-bottom-navigation app dark horizontal :background-color='themeColor' shift>

 <v-btn @click='ProfileGen()'>
       <span>Profile</span>
       <v-icon>account_circle</v-icon>
      </v-btn>


  <v-btn @click='MemeGen()'>
       <span>Create</span>
       <v-icon >add</v-icon>
      </v-btn>
 

    </v-bottom-navigation>
</template>

<script>


export default {
    name: 'BottomBar',
    props: {
        themeColor: {
            type: String,
            default: "#6e387b"
        }
    },
    methods: {
        MemeGen () {
            this.$router.push('memes')
        },
        ProfileGen () {
            this.$router.push('/')
        }
    }
}

</script>