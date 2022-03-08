<template>
  <q-page class="bg-blue-10 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Andows's Market Place</h5>
      </div>
      <div class="row">
        <q-card style="padding: 100px; " square bordered class="q-pa-lg shadow-5">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input outlined v-model="email" type="email" label="email" />
              <q-input
                outlined
                :type="isPwd ? 'password' : 'text'"
                v-model="password"
                label="password"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              @click="onLogin"
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6"></p>
            <q-btn outline color="primary" label="Create an Account" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useAuthRequest } from 'src/helper/requestHelper'

const isPwd = ref<boolean>(true)
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')

const onLogin = async () => {
  try {
    const result = await useAuthRequest.post('auth', {
      email: email.value,
      password: password.value
    })
    localStorage.setItem('userInfo', JSON.stringify(result))
    void router.push('/profile')
  } catch (err) {
    alert(err)
  }
}

onMounted(() => {
  const userInfo = localStorage.getItem('userInfo')
  if (userInfo) {
    void router.push('/profile')
  }
})

</script>
