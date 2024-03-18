<template>
  <form id="search">
    <div>
      <input type="text" placeholder="Search" @input="search"/>
    </div>
  </form>
</template>

<script setup>
const search = (e) => {
    emit('search')
}
</script>

<style scoped>
#search {
  display: flex;
  justify-content: center;
}

input {
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
