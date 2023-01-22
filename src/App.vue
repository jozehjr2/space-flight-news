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
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2022!important;
  margin-top: 60px;
}
</style>
