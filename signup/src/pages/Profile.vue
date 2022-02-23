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
const personName = 'Gerssivaldo'

</script>

<style>

.personName{
  padding-left: 10px;
  font-size: 15px;
}

</style>
