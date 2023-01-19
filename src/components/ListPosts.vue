<template>
  <ul>
    <li v-for="item, index in posts" :key="index" class="my-4">
      <card-post
        :title="item.title"
        :datePublish="item.publishedAt"
        :description="item.summary"
        :imgLeft="index % 2 ? true : false"
        :imgSrc="item.imageUrl"
      ></card-post>
    </li>
  </ul>
  <div class="icons-see-more mt-5">
    <ion-icon name="square" v-for="i in 3" :key="i" class="my-1"></ion-icon>
  </div>
  <button class="button is-link is-light my-5">Carregar mais</button>
</template>
<script>
import CardPost from './CardPost.vue'
export default {
  name: 'ListPost',
  components: {
    CardPost
  },
  created(){
    this.getPosts();
  },
  data(){
    return {
      api: 'https://api.spaceflightnewsapi.net/',
      items: [
        { id: 1, title: 'Argosana ergo quod si servitus', datePublish: '15/05/2000', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 2, title: 'Tenete ergo quod si servitus 2 ander', datePublish: '15/05/2001', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 3, title: 'Ergo Tenete quod si servitus 3 ribo', datePublish: '15/05/2002', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 4, title: 'Servity ergo quod si servitus 4 fox', datePublish: '15/05/2003', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 5, title: 'Pieroro ergo quod si servitus 5 wer', datePublish: '15/05/2004', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 6, title: 'Cantarera ergo quod si servitus 78 dae', datePublish: '15/05/2006', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 7, title: 'Peregrino ergo quod si servitus 25 quomo', datePublish: '15/05/2008', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 8, title: 'Xadresino ergo quod si servitus 53 cer', datePublish: '15/05/2009', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 9, title: 'Ribeanata ergo quod si servitus 225 ter', datePublish: '15/05/2011', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 10, title: 'Xanxarel ergo quod si servitus 555 poger', datePublish: '15/05/2012', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 11, title: 'Lena dert ergo quod si servitus 7 numma', datePublish: '15/05/2000', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 12, title: 'Juharbas ergo quod si servitus 2 xitte', datePublish: '15/05/2001', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
    ],
      posts: []
    }  
  },
  methods: {
    getPosts(){
      const endpoint = 'v3/articles';
      fetch(this.api + endpoint) 
        .then(res => {
          res.json().then(data => {
            this.posts = data;
            console.log(this.posts) 
          })
        })
        .catch(error => {
          console.log('Failed Request: ' + error)
        })     
      /* console.log(response.json());
      this.posts = response;*/
      
    }
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