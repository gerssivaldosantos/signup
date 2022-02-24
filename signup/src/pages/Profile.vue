<template>
  <q-layout>
    <q-page>
      <q-bar>
        <q-icon name="person" />
        <h2 class="personName">{{personName}}</h2>
      </q-bar>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
const personName = ref<string>('Gerssivaldo')

onMounted(() => {
  if (!localStorage.getItem('userInfo')) {
    void useRouter().push('/login')
  }
})

</script>

<style>

.personName{
  padding-left: 10px;
  font-size: 15px;
}

</style>
