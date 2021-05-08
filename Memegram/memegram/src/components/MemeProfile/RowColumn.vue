<template>
<v-main class='marginer'>



 <v-container>
 <v-row class='d-flex'>
         <v-col class='col-6' v-for='meme in memes' :key='meme' no-gutters>
          <v-card tile :elevation='3' height='200' justify='center' hover @click='displayer(meme)' >
     <v-img :src='meme'></v-img>
     
     </v-card>
    
     </v-col>
     </v-row>
 </v-container>
 <v-dialog v-model='dialog'>
 <v-card>
<v-container>
 <v-img :src='dialog_src' hide-overlay></v-img>
 <v-text-field outlined v-model='dialog_src' class='mer' readonly></v-text-field> 
      <v-btn 
            dark
            type="button"
            class='orange mar'
            @click='dialog=!dialog'
        >
            Cancel!
        </v-btn>
        <v-btn 
           dark
            type="button"
            class='red mar'
           @click='Delete()'
        >
            Delete!
        </v-btn>
</v-container>
 </v-card>    

</v-dialog>

 </v-main> 
</template>

<script>
import func from '../func.js'
const {GetObject, SetObjects} = func
import { Plugins } from '@capacitor/core';
const { Modals } = Plugins;


export default {
    name: 'RowColumn',
    data () {
        return {
            memes: '',
            annamary: this.getObject(),
            dialog: false,
            dialog_src: 'https://i.redd.it/a0v87gwzoge61.jpg'
        }
    },
    methods: {

        displayer (meme) {
          this.dialog_src = meme
          this.dialog=!this.dialog
        },
        async getObject() {
          var memes = await GetObject('memes')
          console.log(memes)
          console.log('hi')
          if(memes==null) {
              memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg', 'https://i.redd.it/ka6s0a09zdx61.jpg', 'https://i.redd.it/w0s34s86bso61.jpg']
              SetObjects('memes',memes)
          }
          this.memes=memes
          console.log(memes)
          return memes 
        }, 
        async Delete () {
            const value = await this.showAlert("Are You Sure?")
            console.log(value['value'])
            if(value['value']) {
                this.memes = this.memes.filter(
                    meme=>{
                        if(meme!=this.dialog_src) {
                            return meme
                        }
                    }
                )
                 SetObjects('memes',this.memes)
                this.dialog=!this.dialog
            }

            
        },
         async showAlert(message) {
         let alertRet = await Modals.confirm({
         title: 'Stop',
          message: message
         });
         console.log(alertRet)
        return alertRet
      },

           /* onCopy: function (e) {
                alert('You just copied the following text to the clipboard: ' + e.text)
            },
            onError: function (e) {
                alert('Failed to copy the text to the clipboard')
                console.log(e);
            }*/

    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

.col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
    padding: 4px;
}

.mar {
    margin-left: 11%;
    margin-bottom: 15%;
    
}

</style>