<template>
  <ul>
    <li v-for="item, index in items" :key="index" class="my-4">
      <card-post
        :title="item.title"
        :datePublish="item.datePubish"
        :description="item.description"
        :imgLeft="index % 2 ? true : false"
        :imgSrc="item.imgSrc"
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
  data(){
    return {
      items: [
        { id: 1, title: 'Argosana ergo quod si servitus', datePubish: '15/05/2000', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 2, title: 'Tenete ergo quod si servitus 2', datePubish: '15/05/2001', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 3, title: 'Ergo Tenete quod si servitus 3', datePubish: '15/05/2002', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 4, title: 'Servity ergo quod si servitus 4', datePubish: '15/05/2003', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 5, title: 'Pieroro ergo quod si servitus 5', datePubish: '15/05/2004', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 6, title: 'Cantarera ergo quod si servitus 5', datePubish: '15/05/2006', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 7, title: 'Peregrino ergo quod si servitus 5', datePubish: '15/05/2008', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 8, title: 'Xadresino ergo quod si servitus 5', datePubish: '15/05/2009', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 9, title: 'Ribeanata ergo quod si servitus 5', datePubish: '15/05/2011', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 10, title: 'Xanxarel ergo quod si servitus 5', datePubish: '15/05/2012', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 11, title: 'Lena dert ergo quod si servitus', datePubish: '15/05/2000', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 12, title: 'Juharbas ergo quod si servitus 2', datePubish: '15/05/2001', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 13, title: 'Biu balta ergo quod si servitus 3', datePubish: '15/05/2002', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 14, title: 'Si de Ferres ergo quod si servitus 4', datePubish: '15/05/2003', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 15, title: 'Dandaerergo quod si servitus 5', datePubish: '15/05/2004', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 16, title: 'Dan 3 de ergo quod si servitus 5', datePubish: '15/05/2006', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 17, title: 'Pierry 1 ergo quod si servitus 5', datePubish: '15/05/2008', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 18, title: 'Pierry 2 ergo quod si servitus 5', datePubish: '15/05/2009', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 19, title: 'Pierry 3 ergo quod si servitus 5', datePubish: '15/05/2011', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 20, title: 'Tenete 1 ergo quod si servitus 5', datePubish: '15/05/2012', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 21, title: 'Tenete 2 ergo quod si servitus', datePubish: '15/05/2000', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 22, title: 'Tenete 3 ergo quod si servitus 2', datePubish: '15/05/2001', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 23, title: 'Tenete 30 ergo quod si servitus 3', datePubish: '15/05/2002', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 24, title: 'Ten 34s ergo quod si servitus 4', datePubish: '15/05/2003', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 25, title: 'Tenete 4 ergo quod si servitus 5', datePubish: '15/05/2004', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 26, title: 'Tenete 5 ergo quod si servitus 5', datePubish: '15/05/2006', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 27, title: 'Quad dade ergo quod si servitus 5', datePubish: '15/05/2008', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 28, title: 'Endererergo quod si servitus 5', datePubish: '15/05/2009', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 29, title: 'Washita ergo quod si servitus 5', datePubish: '15/05/2011', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
        { id: 30, title: 'Shitta ergo quod si servitus 5', datePubish: '15/05/2012', description: 'Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus', imgSrc: 'https://bulma.io/images/placeholders/256x256.png' },
      ]
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