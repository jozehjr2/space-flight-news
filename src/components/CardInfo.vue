<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image">
          <img :src="img" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h2>{{ title }}</h2>
          <p class="dataInfo">
            <small>{{ datePublish.substr(0,10) }}</small>  
          </p>
          <p>
            {{ description }}
          </p>
        </div>
        <a :href="siteUrl" class="button is-info go-to-site mt-5" target="_blank">Ir para o site</a>
      </div>
    </article>
    
  </div>
</template>
<script>
export default {
  name: 'CardInfo',
  props: {
    title: {
      type: String
    },
    datePublish: {
      type: String
    },
    description: {
      type: String
    },
    img: {
      type: String
    },
    siteUrl: {
      type: String
    }
  },
}
</script>
<style scoped>
.dataInfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.go-to-site {
  background: #302E53;
}
.go-to-site:hover {
  filter:grayscale(1.2);
}
.image {
  max-width: 256px;
  margin: 30% auto;
}
.media {
  border: none
}
</style>