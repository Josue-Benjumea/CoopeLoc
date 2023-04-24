<script lang="ts" src="./SearchBar.ts"></script>

<template>
  <div class="searchbar-container">
    <input
      id="escrib"
      class="form-control"
      type="text"
      placeholder="Buscar... Ejm:Medellin"
      v-model="searchTerm"
    />

    <SearchResults></SearchResults>
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 20px;
  left: 30px;
  background-color: rgba(0, 0, 0, 0.158);
  z-index: 999;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.582);
  width: 250px;
  border-radius: 10px !important;
  overflow: hidden;
  padding: 5px;
}
</style>
