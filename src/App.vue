<template>
  <div class="container">
    <NavBar />
    <HeaderTitle />
    <ListPosts />
    <BottomFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import HeaderTitle from './components/HeaderTitle'
import ListPosts from './components/ListPosts'
import BottomFooter from './components/BottomFooter'

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderTitle,
    ListPosts,
    BottomFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
