<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/match">Match</router-link>
    |
    <router-link to="/players">Players</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
