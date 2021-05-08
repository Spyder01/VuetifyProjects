<template>
<v-main>
<v-container>
    <v-row>
        <v-col class='col-6' v-for='meme in memes' :key='meme.id'>
            <v-card height=auto :elevation='5' @click='Displayer(meme)'>
                <v-img :src='meme.url'></v-img>
                <v-card-text class='text-subtitle2'>{{meme.name}}</v-card-text>
                </v-card>
        </v-col>
    </v-row>

</v-container> 

<v-dialog v-model='dialog'>
    <v-card v-show='!generator'>
        <v-img :src='src' contain app></v-img>
        <br>

        <v-container v-for='item in box_no' :key='item'>
            <v-text-field
            :label="placer(item)"
            placeholder="Enter Meme Text"
            outlined
            v-model='textbox[item-1]'
          ></v-text-field>
         
        </v-container>
        <v-btn dark class='mar2 green' large @click='PostApi()'>Generate</v-btn>
                  <v-btn large
              dark
            type="button"
            class='red mar2'
            @click='dialog=!dialog'
        >
            Cancel
        </v-btn>
    </v-card>
    <v-card v-show='generator'>
    <v-container>
      <v-img :src='url' contain app></v-img>
      <v-text-field outlined v-model='url' class='mer' readonly></v-text-field> 
      <v-btn dark
            type="button"
            class='orange mar'
            v-clipboard:copy="url"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
        >
            Copy!
        </v-btn>
    
           <v-btn 
           dark
            type="button"
            class='green mar'
            @click='AddFile()'
        >
            Save Meme!
        </v-btn>
              <v-btn 
              dark
            type="button"
            class='red mar'
            @click='dialog=!dialog'
        >
            Cancel
        </v-btn>

        </v-container>
    </v-card>
 </v-dialog>

</v-main>
</template>

<script>
import func from '../func.js'
const {GetObject, SetObjects} = func 

export default {
    name: 'RowColumn',
    methods: {
        async GetApi () {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const { data } = await res.json()
            const { memes } = await data
            console.log(memes[0])
            memes.sort(this.dynamicSort("height"))
            this.memes = memes
            //this.shuffleArray(this.memes)
    
            return memes
        },
        dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
},
        Displayer (meme) {
                this.generator = false
                this.textbox = []
                this.id = meme.id
                this.name = meme.name
                this.src = meme.url
                this.box_no = meme.box_count
    
                this.dialog = !this.dialog
        }, 
        placer (item) {
            console.log(this.textbox)
            return 'text'+item
        },
        /*shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
},*/

    CreatePost ( ) {
        const formdata = new FormData()
        formdata.append('username','SuhanBangera')
        formdata.append('password','Dodla@123')
        formdata.append('template_id',this.id)
        this.textbox.forEach((caption, index) => formdata.append(`boxes[${index}][text]`, caption))
        return formdata

    },

    async PostApi () {  
             const FormData = this.CreatePost()
             const res = await fetch('https://api.imgflip.com/caption_image', {
                 method: 'POST',
                 body: FormData
             })      
             const { data } = await res.json()
             const { url }  = data
             this.url = url
             this.generator = !this.generator      
    },
    
    async AddFile () {
       const memes = await GetObject('memes')
       memes.push(this.url)
       console.log(memes)
       await SetObjects('memes', memes)
    }

    },

    data () {
        return { 
           
            memes: '',
             gtter: this.GetApi () ,
             dialog: false,
             box_no: 2,
             src: 'https://i.imgflip.com/30b1gx.jpg',
             id: '181913649',
             name: '',
             textbox: [''], 
             generator: false, 
             url: 'https://i.imgflip.com'
        }
    }
}
</script>

<style scoped>
.col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
    padding: 5px;
}

.mar {
  margin-left: 1%;
}

.mar2 {
    margin-left: 11%;
    margin-bottom: 15%;
    
}

.mer {
    margin-top: 10%;
}

.v-btn.v-size--default {
    font-size: 0.783rem;   
}


</style>
