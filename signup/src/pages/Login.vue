<template>
  <q-page class="bg-blue-10 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 style="cursor: default;" class="text-h5 text-white q-my-md">Andows's Market Place</h5>
      </div>
      <div class="row">
        <q-card
          style="padding: 50px; max-width: 800px; min-width: 500px;"
          square
          bordered
          class="q-pa-lg shadow-5"
        >
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
          <q-card-section style="padding-right: 15px;" class="text-right q-pa-none">
            <div style="cursor:  pointer;" @click="onForgotPassword">
              <p class="forgot-password">Forgot the password ?</p>
            </div>
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <q-btn @click="onCreateUser" outline color="primary" label="Create an Account" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useRequest } from 'src/helper/requestHelper'
import { Notify } from 'quasar'

const isPwd = ref<boolean>(true)
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')

const onForgotPassword = async () => {
  try {
    await router.push('/rescuePassword')
  } catch (err) {
    alert(err)
  }
}

const onCreateUser = async () => {
  try {
    await router.push('/createUser')
  } catch (err) {
    alert(err)
  }
}

const onLogin = async () => {
  try {
    const result = await useRequest.post('auth', {
      email: email.value,
      password: password.value
    })
    localStorage.setItem('userInfo', JSON.stringify(result))
    await router.push('/profile')
    Notify.create({
      message: 'Welcome',
      color: 'green',
      timeout: 300
    })
  } catch (err) {
    Notify.create({
      message: 'Internal server error',
      color: 'red',
      timeout: 300
    })
  }
}

onMounted(() => {
  const userInfo = localStorage.getItem('userInfo')
  if (userInfo) {
    void router.push('/profile')
  }
})

</script>

<style>
.forgot-password {
  color: #868686;
}

.forgot-password:hover {
  transition: all 1s;
  color: rgb(50, 111, 224);
}
</style>
