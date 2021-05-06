<template>
<div class="Profile">
<div class="mx-auto">
<avatar/>
<span class='text-h5 fonter'>Suhan Bangera</span>
</div>
</div>
</template>

<script>
import avatar from './Avatar' 
export default {
    name: 'profile',
    components: {
        avatar
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

}

.v-application .text-h5 {
position: relative;
top: 5px;
font-family: 'Itim', cursive !important;
font-size: 1.5rem !important;
}

</style>