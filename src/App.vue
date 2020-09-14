<template>
  <div id="app">
    <Header></Header>
    <container></container>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '@/components/globals/Footer.vue'
import Header from '@/components/globals/Header.vue'
import Container from '@/components/globals/Container.vue'

@Component({
  components: { Container, Header, Footer }
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: palegreen;
}

body{
  margin:0;
}
.footer {
  background-image: linear-gradient(180deg, palegreen,palegreen, white);
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.header {
  background-image: linear-gradient(180deg, white, palegreen,palegreen);
  padding: 1rem;
  display: flex;
  justify-content: center;
}
</style>
