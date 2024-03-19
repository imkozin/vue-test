<template>
  <nav>
    <div>
      <a class="logo">Parseq Tests</a>
      <router-link to="/">Запуски</router-link> |
      <router-link to="/analyze">Анализы</router-link>
    </div>
    <div>
      <button>Загрузить данные</button>
      <a>username</a>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

button {
  color: #f1f1f1;
  text-transform: uppercase;
  background-color: #42b983;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
}

button:hover {
  background-color: cadetblue;
}
</style>
