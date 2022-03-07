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
import { useUserRequest } from 'src/helper/requestHelper'

const personName = ref<string>('Loading ...')
const router = useRouter()

const onLogout = async () => {
  try {
    localStorage.removeItem('userInfo')
    await router.push('/login')
  } catch {
    await router.push('/login')
  }
}

const getPersonInfo = async () => {
  try {
    const result = await useUserRequest.get('user')
    return result
  } catch (err) {
    alert(err)
  }
}
onMounted(() => {
  if (!localStorage.getItem('userInfo')) {
    void router.push('/login')
  }
  const user = getPersonInfo()
  console.log(user)
})

</script>

<style>

.personName{
  padding-left: 10px;
  font-size: 15px;
}

</style>
