<template>
<v-avatar :elevation='5' :color="color" id="avatar" dark size="110">
<v-img :src="src" @click='Changer()'></v-img>
</v-avatar>

</template>

<script>

export default {
    name: 'avatar',
    props: {
        color: {
            type: String,
            default: "#6e387b"
        },
        name: {
            type: String,
            default: 'Suhan'
        }
    },    
    data () {
        return {
          rand: this.name,
          src: 'https://avatars.dicebear.com/api/avataaars/'+this.name+'.svg'  
        }
    },
    methods: {
        Changer () {
                let rand = this.RandString(Math.floor(Math.random()*5))
                this.src = 'https://avatars.dicebear.com/api/avataaars/'+rand+'.svg'
              
        },
        RandString (length) {
            var result = []
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde0123456789'
            var charactersLength = characters.length
            for ( var i = 0; i < length; i++ ) {
               result.push(characters.charAt(Math.floor(Math.random()*charactersLength)))
            }
            return result.join('')
        }
    },
    
}
</script>

<style scoped>
 #avatar {
    position: relative;
    margin: 5%;
 }

 </style>