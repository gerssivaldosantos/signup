<template>
  <q-layout>
    <q-page>
      <q-bar style="display: flex; justify-content: space-between;" >
        <q-icon name="person" />
        <h2 class="personName">{{userInfo?.name}}</h2>
        <q-btn @click="onLogout" color="black" label="logout"/>
      </q-bar>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { userRequest } from 'src/@types/userRequest'

const userInfo = ref<userRequest>()
const router = useRouter()

const onLogout = async () => {
  try {
    localStorage.removeItem('userInfo')
    await router.push('/login')
  } catch {
    await router.push('/login')
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
