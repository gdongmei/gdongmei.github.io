<template>
  <div class="portfolio-page">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <PageCover></PageCover> -->
  
    <!-- <PageProjects></PageProjects> -->
    <!-- <HelloWorld msg="Welcome to My Website"/> -->
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PageHeader from './components/PageHeader.vue'
// import PageCover from './components/PageCover.vue'
// import PageProjects from './components/PageProjects.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PageHesader,
    // PageCover,
    // PageProjects
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (min-width: 1134px) {
    .page-cover-container,
    .page-navbar
    {
        max-width: 1086px!important;
        margin: 0 auto;
    }
}
@media (min-width: 768px) {
    .page-home,
    .page-about {
        max-width: calc(100% - 48px);
    }
}
</style>
