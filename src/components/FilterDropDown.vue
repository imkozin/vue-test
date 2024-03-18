<template>
  <div class="dropdown">
    <select @change="select">
      <option value="" selected>Select Significance</option>
      <option value="pathogenic">PATHOGENIC</option>
      <option value="likely_pathogenic">LIKELY_PATHOGENIC</option>
      <option value="benign">BENIGN</option>
      <option value="likely_benign">LIKELY_BENIGN</option>
      <option value="undefined">UNDEFINED</option>
      <option value="uncertain">UNCERTAIN</option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(['select'])

const select = (e) => {
  emit('select', e.target.value)
}
</script>

<style scoped>
.dropdown {
  position: relative;
  font-family: Arial;
}

select {
  font-size: 1rem;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>
