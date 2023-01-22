<template>
  <ul>
    <li v-for="item, index in getPosts()" :key="index" class="my-4">
      <card-post
        :title="item.title"
        :datePublish="item.publishedAt"
        :description="item.summary"
        :imgLeft="index % 2 ? true : false"
        :imgSrc="item.imageUrl"
        :siteUrl="item.url"
      ></card-post>
    </li>
  </ul>
  <div class="icons-see-more mt-5">
    <ion-icon name="square" v-for="i in 3" :key="i" class="my-1"></ion-icon>
  </div>
  <button class="button is-link is-light my-5" @click="reload">Carregar mais</button>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CardPost from './CardPost.vue'

export default {
  name: 'ListPost',
  components: {
    CardPost
  },
  created(){
    this.fetchPosts();
  },
  data(){
    return {
      api: 'https://api.spaceflightnewsapi.net/',
      //posts: [],
    }  
  },

  methods: {
    ...mapActions(['setPosts']),
    ...mapGetters(['getPosts', 'getSearchFor']),
    fetchPosts(){
      const endpoint = 'v3/articles';
      fetch(this.api + endpoint) 
        .then(res => {
          res.json().then(data => {
            this.setPosts(data);
            //this.posts = data; 
            //this.filterPosts(); 
          })
        })
        .catch(error => {
          console.log('Failed Request: ' + error)
        })  
    },
    filterPosts(){
      return this.posts.filter(f => f.title.includes(this.getSearchFor()));
    },
    reload(){
      this.fetchPosts();
      document.location.reload(true);   
    },
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 60%;
  margin: auto;
}
.icons-see-more {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>