<template>
  <q-layout>
    <q-page>
      <q-bar style="display: flex; justify-content: space-between;" >
        <q-icon name="person" />
        <h2 class="personName">{{personName}}</h2>
        <q-btn @click="onLogout" color="black" label="logout"/>
      </q-bar>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
const personName = ref<string>('Gerssivaldo')
const router = useRouter()

const onLogout = () => {
  try {
    localStorage.removeItem('userInfo')
    setTimeout(() => {
      void router.push('/login')
    }, 50)
  } catch {
    void useRouter().push('/login')
  }
}

onMounted(() => {
  if (!localStorage.getItem('userInfo')) {
    void router.push('/login')
  }
})

</script>

<style>

.personName{
  padding-left: 10px;
  font-size: 15px;
}

</style>
