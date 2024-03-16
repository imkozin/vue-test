<template>
  <!-- <pre>{{ data }}</pre> -->
  <div v-for="variant in data" :key="variant.id">
  <h3>{{ variant.alleleName }}</h3>
      <p>Significance: {{ variant.significance }}</p>
      <p>Genotype: {{ variant.genotype }}</p>
      <ul>
        <p>HGVS Notation:</p>
        <li v-for="notation in variant.hgvs">{{ notation }}</li>
      </ul>
      <p>External Sources:</p>
      <ul>
        <li v-for="source in variant.externalSourceEntries" :key="source.id">
          <a :href="source.link" target="_blank">{{ source.database.name }}</a> - Significance: {{ source.significance }}
        </li>
      </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import userData from '../assets/variants.json'

const data = computed(() => {
    console.log(userData);
  return userData.variants
})
</script>

<style scoped></style>
