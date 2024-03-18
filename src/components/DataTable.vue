<template>
  <div>
    <div class="sort">
      <SearchForm @search="handleSearch" />

      <!-- <FilterGen />

            <FilterSign /> -->
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="item in items" :key="item.id">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variant in filteredVariants" :key="variant.id">
          <td>{{ variant.alleleName }}</td>
          <td>{{ variant.significance }}</td>
          <td>{{ variant.genotype }}</td>
          <td>
            <ul>
              <li v-for="notation in variant.hgvs">{{ notation }}</li>
            </ul>
          </td>
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
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchForm from './SearchForm.vue';
// import FilterGen from './FilterGen.vue';
// import FilterSign from './FilterSign.vue';

const searchFilter = ref('')

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
})

const filteredVariants = computed(()=> {
  if (searchFilter !== '') {
    return props.data.filter(item => item.alleleName.toLowerCase().includes(searchFilter.value.toLowerCase()))
  }

  return props.data
})

const handleSearch = (search) => {
  searchFilter.value = search;
}
</script>

<style scoped>
.sort {
  display: flex;
  justify-content: space-between;
}

table {
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
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
