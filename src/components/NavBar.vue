<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="control has-icons-right">
            <input class="input is-info" type="text" placeholder="Search">
            <span class="icon is-right">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div class="navbar-item">
          <div class="select is-info">
            <select class="sorting">
              <option>Mais novas</option>
              <option>Mais antigas</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .sorting, .select {
    height: 100%;
  }
</style>