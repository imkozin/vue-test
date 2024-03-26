<template>
  <div class="container">
    <div class="sort">
      <SearchForm @search="handleSearch" />

      <FilterRadio @filter="handleRadioFilter" />
      <FilterDropDown @select="handleSelectFilter" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Variant Name</th>
          <th>Significance</th>
          <th>Genotype</th>
          <th colspan="3">HGVS Notation</th>
          <th>External Sources</th>
        </tr>
        <!-- <tr>
          <th v-for="item in items" :key="item.id">{{ item.title }}</th>
        </tr> -->
      </thead>
      <tbody>
        <tr id="row" v-for="variant in filteredData" :key="variant.id">
          <td>
            {{ variant.alleleName }}
          </td>
          <td>{{ variant.significance }}</td>
          <td>
            {{ variant.genotype }}
          </td>
          <!-- <td>
            <ul v-for="notation in variant.hgvs">
                <li >{{ notation.c }}</li>
              </ul>
          </td> -->
          <td>{{ variant.hgvs.g }}</td>
          <td>{{ variant.hgvs.c }}</td>
          <td>{{ variant.hgvs.p }}</td>
          <td>
            <ul>
              <li
                v-for="source in variant.externalSourceEntries"
                :key="source.id"
              >
                <a :href="source.link" target="_blank">{{
                  source.database.name
                }}</a>
                - Significance: {{ source.significance }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="data" v-if="filteredData.length === 0">
      No data matches the applied filters
    </div>
  </div>
</template>

<script setup>
import { computed, provide, ref } from 'vue'
import SearchForm from './SearchForm.vue'
import FilterDropDown from './FilterDropDown.vue'
import FilterRadio from './FilterRadio.vue'

const searchFilter = ref('')
const radioFilter = ref('')
let selectFilter = ref('')

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})

const filteredData = computed(() => {
  let filteredData = [...props.data]

  if (radioFilter.value === 'heterozygote') {
    filteredData = filteredData.filter(
      (item) => item.genotype.toLowerCase() === 'heterozygote'
    )
  } else if (radioFilter.value === 'homozygote') {
    filteredData = filteredData.filter(
      (item) => item.genotype.toLowerCase() === 'homozygote'
    )
  }

  if (searchFilter.value !== '') {
    const searchValue = searchFilter.value.toLowerCase()
    filteredData = filteredData.filter(
      (item) =>
        item.alleleName.toLowerCase().includes(searchValue) ||
        item.hgvs.g.toLowerCase().includes(searchValue) ||
        item.hgvs.c.toLowerCase().includes(searchValue) ||
        item.hgvs.p.toLowerCase().includes(searchValue)
    )
  }

  if (selectFilter.value) {
    filteredData = filteredData.filter(
      (item) => item.significance.toLowerCase() === selectFilter.value
    )
  }

  return filteredData
})

const handleSearch = (search) => {
  searchFilter.value = search
}

const handleRadioFilter = (filter) => {
  radioFilter.value = filter
}

const handleSelectFilter = (select) => {
  console.log(select)
  selectFilter.value = select
}
</script>

<style scoped>
.container {
  max-width: 100%;
  overflow-x: auto;
}

.sort {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 2em;
}

table {
  width: 100vw;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  height: 100px;
  background-color: #f9f9f9;
}

th,
td {
  /* max-width: 100px;
  max-height: 120px; */
  padding: 10px 20px;
}

tbody #row:hover td {
  cursor: pointer;
  background-color: #eaecee;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.data {
  color: #42b983;
  font-size: 2em;
  margin: 0 auto;
}
</style>