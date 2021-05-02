<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="grey darken-4"
    >
    <div class="border hidden-lg-and-up">
    <div class = "holder" >
    <span id="menu-icon"> <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon></span>
    <span id="margin"><span id="logo">M</span><span id="Logo-text">MyTuBe</span></span>
  </div>
  </div>
    
    </v-navigation-drawer>

    <v-app-bar app dark flat height='56px' class="grey darken-4">
     <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><span id="logo">M</span><span id="Logo-text">MyTuBe</span></v-toolbar-title>
      <div class="mx-auto my-auto">
      <searchbar width="220%" />
      </div>
      <v-btn flat fab depressed small class="grey darken-4"><v-icon color="whitesmoke">video_call</v-icon></v-btn>
      <v-btn flat fab depressed small class="grey darken-4"><v-icon color="whitesmoke">apps</v-icon></v-btn>
      <v-btn flat fab depressed small class="grey darken-4"><v-icon color="whitesmoke">notifications</v-icon></v-btn>
    </v-app-bar>

  </v-app>
</template>

<script>
  import 'material-design-icons-iconfont/dist/material-design-icons.css'
  import searchbar from './searchbar.vue' 
  export default {
    name: 'navbar',
    data: () => ({ drawer: false }),
    icons: {
      iconfont: 'md',
    },
    components: {
      searchbar
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

#menu-icon {
   margin-right: 10px;
   position: relative;
   bottom: 6px;
}

#margin {
  font-size: 125%;
  position: relative;
}
#logo {
    font-family: 'Zen Dots', cursive;
    color: red;
    font-size: 200%;
}
#Logo-text {
    font-family: 'Italiana', serif;
    font-size: 125%;
    color: white;
}
.holder {
    display: block;
    height: 56px;
    padding: 4px 16px;
    position: relative;
    bottom: 5px;
    
}

.border {
  border-bottom: 0.8px solid;
  border-color: rgba(125,125,125,0.8)
}
</style>