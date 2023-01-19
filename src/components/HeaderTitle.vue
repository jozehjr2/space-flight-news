<template>
  <div>
    <figure class="image is-128x128 mx-auto my-4">
      <ion-icon name="rocket-outline"></ion-icon>
    </figure>
    <h3 class="title is-3">Space Flight News</h3>
    <hr class="my-6"/>
  </div>
</template>
<script>
export default {
  name: 'HeaderTitle'
}
</script>
<style scoped>
ion-icon {
  font-size: 64px;
  padding: 30px;
  border: 2px solid;
  border-radius: 50%;
}
hr {
  width: 100%;
  height: 3px;
  background-color: #302e53;
}
</style>