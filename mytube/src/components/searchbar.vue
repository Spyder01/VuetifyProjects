<template>
<div>
     <input type="text" class="search" placeholder="Search">
<div>
</template>

<script>
export default {
    name: 'searchbar',
    props: {
        width: String,
        height: {
            type: String,
            default: '30px'
        }
    }
}
</script>

<style scoped>
.search {
    height: 30px;
    width: 200%;
    border-color: rgb(59, 59, 59);
    border-radius: 2px;
    border-style: solid;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2px 6px;
}

.theme--light.v-application {
 background-color: #181818; 
}
</style>
