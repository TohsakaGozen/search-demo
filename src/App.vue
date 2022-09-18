<template>
  <div id="app">
    <Search></Search>
    <List></List>
    <div class="bg"></div>
  </div>
</template>
<script>
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Search,List
}
}
</script>

<style>
.bg {
  background-image: url(../src/assets/image/96144580_p0_master1200.jpg);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -999;
  opacity: 0.8;
}
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
body{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  width: 50%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
}
</style>
