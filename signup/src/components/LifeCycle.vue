<template>
  <div>
    <p>The data of app is {{ test }}</p>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
      test: 'Life Cycle'
    }
  },
  created () {
    setTimeout(() => {
      this.test = 'Life Cycle 2'
    }, 2000)
  },

  mounted () {
    this.test = 'Life Cycle mounted'
  }
}

</script>

<style></style>
