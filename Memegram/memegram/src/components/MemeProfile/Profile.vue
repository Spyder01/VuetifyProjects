<template>
<div class="Profile">
<div class="mx-auto">
<avatar/>
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


.Profile {
  padding: 30%;
  align-items: center;

}

</style>