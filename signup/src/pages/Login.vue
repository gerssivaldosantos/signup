<template>
  <div class="main">
    <h1>Hellow Vue</h1>
    <h4>My name is {{ name }}</h4>
    <h4>I work with {{ job }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Login',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      name: 'Gerssivaldo',
      job: 'Development'
    }
  }
}
</script>

<style>
</style>
