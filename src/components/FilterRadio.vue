<template>
  <div>
    <input type="radio" id="genChoice1" name="gen" value="all" checked @change="filter"/>
    <span>SHOW ALL</span>
    <input type="radio" id="genChoice2" name="gen" value="heterozygote" @change="filter"/>
    <span>HETEROZYGOTE</span>
    <input type="radio" id="genChoice3" name="gen" value="homozygote" @change="filter"/>
    <span>HOMOZYGOTE</span>
  </div>
</template>

<script setup>
const emit = defineEmits(['filter'])

const filter = (e) => {
    emit('filter', e.target.value)
}


</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
