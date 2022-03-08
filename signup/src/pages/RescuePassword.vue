<template>
    <q-page class="bg-blue-10 window-height window-width row justify-center items-center">
        <div class="column">
            <div class="row">
                <div class="row">
                    <q-btn @click="router.push('/login')" flat color="white" icon="arrow_back" />
                    <p class="text-h5 text-white q-my-md">New User</p>
                </div>
                <h5 class="text-h5 text-white q-my-md">Rescue password</h5>
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
                        </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn
                            unelevated
                            color="primary"
                            size="lg"
                            class="full-width"
                            label="Send"
                        />
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref<string>('')

</script>
