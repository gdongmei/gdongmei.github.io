<template>
  <div class="page-container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <PageCover></PageCover> -->
    <PageHeader></PageHeader>
    <!-- <PageProjects></PageProjects> -->
    <!-- <HelloWorld msg="Welcome to My Website"/> -->
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/PageHeader.vue'
// import PageCover from './components/PageCover.vue'
// import PageProjects from './components/PageProjects.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    PageHeader,
    // PageCover,
    // PageProjects
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-container {
   position: relative;
    width: 1100px;
    padding: 0 16px;
    margin: 0 auto;
}
</style>
