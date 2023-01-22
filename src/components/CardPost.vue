<template>
  <div class="box">
    <article class="media">
      <div class="media-left" v-if="imgLeft">
        <figure class="image">
          <img :src="imgSrc" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h3>{{ title }}</h3>
          <p class="dataPost">
            <small>{{ datePublish.substr(0,10) }}</small>  <a :href="siteUrl" class="button is-small" target="_blank">Site</a>
          </p>
          <p>
            {{ description }}
          </p>
        </div>
        <button class="button is-info see-more mt-5" type="button" @click="showModal">
          Ver mais
        </button>
        <modal-more-info
          v-show="isModalVisible"
          @close="closeModal"
          :title="dataModal.title"
          :datePublish="dataModal.datePublish"
          :description="dataModal.description"
          :imgLeft="true"
          :imgSrc="dataModal.imgSrc"
          :siteUrl="dataModal.siteUrl"
        >
        </modal-more-info>
      </div>
      <div class="media-right"  v-if="!imgLeft">
        <figure class="image">
          <img :src="imgSrc" alt="Image">
        </figure>
      </div>
    </article>
    
  </div>
</template>
<script>
import ModalMoreInfo from './ModalMoreInfo'

export default {
  name: 'CardPost',
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
    imgLeft: {
      type: Boolean
    },
    imgSrc: {
      type: String
    },
    siteUrl: {
      type: String
    }
  },
  components: {
    ModalMoreInfo
  },
  data() {
    return {
      isModalVisible: false,      
    }
  },
  computed: {
    dataModal() {
      return {
        title: this.$props.title,
        datePublish: this.$props.datePublish,
        description: this.$props.description,
        imgSrc: this.$props.imgSrc,
        siteUrl: this.$props.siteUrl
      }
    }
  },  
  methods: {
    showModal() {
      this.isModalVisible = true;
      console.log(this.dataModal)
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
<style scoped>
.dataPost {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.see-more {
  background: #302E53;
}
.see-more:hover {
  filter:grayscale(1.2);
}
.image {
  max-width: 256px;
  margin: 30% auto;
}
</style>