<template>
  <nav>
    <div>
      <a class="logo">Parseq Tests</a>
      <router-link to="/">Запуски</router-link> |
      <router-link to="/analyze">Анализы</router-link>
    </div>
    <div class="user">
      <button @click="exportToPdf">Загрузить данные</button>
      <a class="user"
        ><svg
          class="user-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
          />
        </svg>
        username
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          /></svg
      ></a>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import userData from './assets/variants.json'

const exportToPdf = () => {
  const doc = new jsPDF()

  const tableData = userData.variants.map((item) => {
    return [
      item.alleleName,
      item.hgvs.g,
      item.hgvs.c,
      item.hgvs.p,
      item.genotype,
      item.significance,
    ]
  })
  const headers = [
    'Variant Name',
    'HGVS (g)',
    'HGVS (c)',
    'HGVS (p)',
    'Genotype',
    'Significance',
  ]

  doc.autoTable({ head: [headers], body: tableData })

  doc.save('data.pdf')
}
</script>

<style>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-icon,
.arrow {
  width: 16px;
  height: 16px;
  fill: #fff;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 15px;
}

nav div {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a,
.logo {
  text-transform: uppercase;
  font-weight: bold;
  color: #f1f1f1;
  margin: 0 20px;
}

.logo {
  font-size: 12px;
  margin-right: 4em;
}

nav a:hover {
  color: #c1c1c1;
}

button {
  color: #f1f1f1;
  text-transform: uppercase;
  background-color: #42b983;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  margin-right: 20px;
}

button:hover {
  background-color: cadetblue;
}

.user {
  text-transform: lowercase;
}
</style>
