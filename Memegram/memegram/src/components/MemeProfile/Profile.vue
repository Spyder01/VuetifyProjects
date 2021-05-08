<template>
<div>
<div class="Profile">
<div class="mx-auto">
<avatar :name='name' @avatar='Pikabu'/>
<div @click='onClick' class='text-h5 fonter'>{{name}}</div>
</div>

</div>
<v-dialog v-model='dialog'>
  <v-card>
  <v-container>
    <div class='mer'>
    <avatar :name='name'/>
    </div>
    <v-text-field label='Name' placeholder='Enter Your Name to generate Avatar' v-model='name' maxlength='15' outlined></v-text-field>
    <v-btn class='green marr' @click='Setter()'>Set Name</v-btn>
    <v-card-text class='text-caption red--text'>You can always change your avatar by clicking on it.</v-card-text>
  </v-container>
  </v-card>
</v-dialog>
</div>
</template>

<script>
import { Plugins } from '@capacitor/core';
const { Modals } = Plugins;

import func from '../func.js'
const {GetObject, SetObjects} = func 

import avatar from './Avatar' 
export default {
    name: 'profile',
    components: {
        avatar
    },
    data () {
      return {
        name: '',
        simply: this.putName(),
        dialog: false,
        avatar: ''
      }
    }, 
    methods: {
      onClick ()  {
        this.dialog=!this.dialog
        this.name= ''
      },
     Setter () {
        if(this.name==''){
          this.showAlert('Enter Your Name')
        }
        else {
          SetObjects('name',this.name)
          SetObjects('Avatar',this.avatar)
          this.dialog=!this.dialog
        }
      },
      async showAlert(message) {
         let alertRet = await Modals.alert({
         title: 'Stop',
          message: message
         });
        return alertRet
      },
      async putName () {
        var name = await GetObject('name')
        if(name==null){
          name='Set Your Name'
          SetObjects('name',name)
        }
        this.name = name
        console.log(name)
        return name
      }, 
      Pikabu (src) {
        console.log('Pikabu')
        this.avatar =src
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

.Profile {
  position: relative;
  top: 50px;
  padding: 7%;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 20%;

}

.marr{
  margin-left: 50%;
}

.mer {
  margin-left: 23%;
}

.fonter {
  text-align: center;
  margin-right: 38%;
}

.v-application .text-h5 {
position: relative;
top: 5px;
font-family: 'Itim', cursive !important;
font-size: 2.3rem !important;
}

</style>