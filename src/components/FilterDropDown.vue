<template>
  <div class="dropdown">
    <select>
      <option>-- Select Significance --</option>
      <option>PATHOGENIC</option>
      <option>LIKELY_PATHOGENIC</option>
      <option>BENIGN</option>
      <option>LIKELY_BENIGN</option>
      <option>UNDEFINED</option>
      <option>UNCERTAIN</option>
    </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style scoped>
.dropdown {
  position: relative;
  display: flex;
  align-items: center;
}


</style>
