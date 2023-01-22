<template>
<transition name="modal-fade">
    <div 
      class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <card-info
          :title="title"
          :datePublish="datePublish"
          :description="description"
          :img="imgSrc"
          :siteUrl="siteUrl"
        ></card-info>
      </div>
      <button class="modal-close is-large" aria-label="Close modal" @click="close"></button>
    </div>
  </transition>
</template>
<script>
import CardInfo from './CardInfo.vue'

export default {
  name: 'ModalMoreInfo',
  components: {
    CardInfo
  },
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
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>
<style scoped>
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .modal.is-active {
    display: flex;
    width: 700px;
    height: 500px;
    margin: auto;
  }
  .modal-close {
    position: absolute;
    right: 8px;
    top: 8px;
    background-color: rgba(112, 128, 144, 0.4);
  }
  .modal-close:hover {
    filter: opacity(0.5);
  }
  .modal-background {
    background: rgb(255, 255, 255);
    border: 1px solid #1e2022;
    border-radius: 5px;
  }
</style>