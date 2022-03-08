<template>
  <q-layout>
    <q-page>
      <q-header elevated class="bg-blue-10 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-icon style="padding-top: 8px;" name="person" />
            <h2 class="personName">{{ userInfo?.name }}</h2>
          </q-toolbar-title>
          <q-btn @click="onLogout" flat text-color="white" color="white" icon="logout" />
        </q-toolbar>
      </q-header>
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
.personName {
  padding-left: 10px;
  font-size: 15px;
}
</style>
