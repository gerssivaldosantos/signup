<template>
  <div class="main">
    <h1>Hellow Vue</h1>
    <h4>My name is {{ name }}</h4>
    <h4>I work with {{ job }}</h4>
    <LifeCycle />
  </div>
</template>

<script>
import LifeCycle from 'src/components/LifeCycle.vue'
export default {
  name: 'Login',
  data () {
    return {
      name: 'Gerssivaldo',
      job: 'Development'
    }
  },
  components: { LifeCycle }
}
</script>

<style>
</style>
