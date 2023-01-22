<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="control has-icons-right">
            <input class="input is-info" type="text" v-model="search" placeholder="Search" @keydown="filter(search)" @blur="reload">
            <span class="icon is-right">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div class="navbar-item">
          <div class="select is-info">
            <select class="sorting" v-model="sorting" @change="onChange($event)">
              <option :value="1">Mais novas</option>
              <option :value="2">Mais antigas</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      search: '',
      cachedPosts: [],
      sorting: null,
      alreadyOrdered: false
    }
  },
  methods: {
    ...mapActions(['setSearchFor', 'setPosts']),
    ...mapGetters(['getPosts', 'getSearchFor']),
    filter(searchFor){
      this.cachedPosts = this.getPosts();

      this.setSearchFor(searchFor);
      const filter = this.getPosts().filter( f => f.title.includes(this.getSearchFor()));
      this.setPosts(filter);     
    },
    reload(){
      if(this.search == '' || this.search == null){
        //this.setPosts(this.cachedPosts);  
        document.location.reload(true);
      }  
    },
    onChange(event){
      if(event.target.value == 2){
        this.getPosts().reverse();
        this.alreadyOrdered = true;
      }
      if(event.target.value == 1 && this.alreadyOrdered){
        this.getPosts().reverse();
      }
    }
  }
}
</script>
<style scoped>
  .sorting, .select {
    height: 100%;
  }
</style>