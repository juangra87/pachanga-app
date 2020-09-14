<template>
  <div class="footer">
    <div>
      <h4>Pachanga app was made with: </h4>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
         rel="noopener">babel</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank"
         rel="noopener">router</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank"
         rel="noopener">vuex</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
         rel="noopener">eslint</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank"
         rel="noopener">unit-jest</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank"
         rel="noopener">e2e-cypress</a>
      <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank"
         rel="noopener">typescript</a>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
     <h5>All right reserved.</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
}
</script>

<style scoped>
a {
  margin: 0.5rem;
  color: #2c3e50;
}
</style>
