<template>
<nav>

    <v-app-bar app dark :color=themeColor>
     <v-toolbar-title class='text-h4'><span class='font-weight-thin white--text'>MEME</span><span class='title font-weight-thin white--text'>Gram</span></v-toolbar-title>
    </v-app-bar>
</nav>

</template>

<script>

export default {
    name: "navbar",
    props: {
        themeColor: {
            type: String,
            default: "#6e387b"
        },
        data () {
            return {
                drawer: null
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');


.v-application .title {
    font-family: 'Amatic SC', cursive !important;
    font-size: 75% !important;
}

</style>
