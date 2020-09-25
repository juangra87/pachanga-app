<template>
  <div id="nav" >
    <div v-for="menuItem in menuItems" :key="menuItem.id">
    <router-link :to="menuItem.path">{{menuItem.name}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MenuItem from '@/model/navigation/MenuItem'

@Component
export default class Navigation extends Vue {
  @Prop() private menuItems: MenuItem[]= [new MenuItem('home', '/', 'Home')];
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
