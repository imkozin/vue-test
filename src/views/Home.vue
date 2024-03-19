<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td><RouterLink to="/analyze">CPTKH6</RouterLink></td>
          <td>23.11.2020</td>
          <td>Test Sample 01 S1 CFTR v1 (SP 1.1.1)</td>
          <td class="last">1210-0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped>
table {
  margin: 20px 30px;
}

.last {
  font-size: 10px;
  padding: 3px 6px;
  color: lightgreen;
  border: 2px solid lightgreen;
  border-radius: 10px;
}
</style>
