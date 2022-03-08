<template>
  <q-page class="bg-blue-10 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <div class="row">
          <q-btn @click="router.push('/login')" flat color="white" icon="arrow_back" />
          <p class="text-h5 text-white q-my-md">New User</p>
        </div>
      </div>
      <div class="row">
        <q-card
          style="padding: 50px; max-width: 800px; min-width: 500px; "
          square
          bordered
          class="q-pa-lg shadow-5"
        >
          <q-card-section>
            <q-form class="q-gutter-md"></q-form>
            <q-input outlined v-model="name" type="text" label="Name" />
            <br />
            <q-input outlined v-model="email" type="text" label="Email" />
            <br />
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
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              @click="onCreateUser"
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="Create"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6"></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { useAuthRequest } from 'src/helper/requestHelper'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'
const isPwd = ref<boolean>(true)
const name = ref<string>()
const email = ref<string>()
const password = ref<string>()
const userTypeId = '0e86ecd4-ad5f-4321-98bf-c6892cc48814'
const router = useRouter()

const onCreateUser = async () => {
  try {
    await useAuthRequest.post('users', {
      name: name.value,
      email: email.value,
      password: password.value,
      user_type_id: userTypeId
    })
    Notify.create({
      message: 'Created',
      color: 'green'
    })
    await router.push('/login')
  } catch (err) {
    Notify.create({
      message: 'Cannot create',
      color: 'red'
    })
  }
}
</script>
