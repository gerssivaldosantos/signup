<template>
 <q-layout>
    <q-page>
      <q-main>
        <q-card class="card">
          <q-card-content>
            <q-input label="email" v-model="email" />
            <q-input label="senha" v-model="password" type="password"/>
            <q-btn @click="onLogin" label="Logar" />
          </q-card-content>
        </q-card>
      </q-main>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuthRequest } from 'src/helper/requestHelper'

const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')

const onLogin = async () => {
  try {
    await useAuthRequest.post('auth', {
      email: email.value,
      password: password.value
    })
    void router.push('/profile')
  } catch (err) {
    alert(err)
  }
}

</script>

<style>

.card{
  padding: 20px;
}

</style>
