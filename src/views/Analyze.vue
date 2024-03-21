<template>
  <div class="main">
    <!-- <DataTable :items="items" :data="data" /> -->
    <DataTable :data="data" />
  </div>
</template>

<script setup>
import DataTable from "@/components/DataTable.vue";
import { computed } from "vue";
import userData from "../assets/variants.json";

const items = [
  {
    id: 1,
    title: 'Variant Name',
  },
  {
    id: 2,
    title: 'Significance',
  },
  {
    id: 3,
    title: 'Genotype',
  },
  {
    id: 4,
    title: 'HGVS Notation',
  },
  {
    id: 5,
    title: 'External Sources',
  },
];

const data = computed(() => {
  return userData.variants;
});
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
