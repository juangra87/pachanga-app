<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Container extends Vue {
}
</script>

<style scoped>

.container {
  border-style: solid;
  border-color: white;
  padding: 0.5rem;
  margin: 0.5rem;
}

</style>
