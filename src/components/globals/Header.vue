<template>
  <div class="header">
    <Navigation></Navigation>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Navigation from '@/components/globals/Navigation'

@Component({
  components: { Navigation }
})
export default class Header extends Vue {
}
</script>

<style scoped>

</style>
