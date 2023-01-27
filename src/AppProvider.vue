<template>
  <ToastProvider>
    <App @add-toast="addToast"/>

    <ToastMessages/>
  </ToastProvider>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import ToastProvider from './components/ToastProvider.vue';
import ToastMessages from './components/ToastMessages.vue';
import {useToast} from './composables/useToast';
import App from './App.vue';

const { toastApi, toastType, toastMessage, toastDuration, displayToast, setAddedToast, updateAddedToast } = useToast();

provide('getDisplayToast', displayToast)

function addToast(typ: any, msg: any, duration: any) {
        toastType.value = typ
        toastMessage.value = msg
        toastDuration.value = duration
        setAddedToast()
        updateAddedToast(0)
      }


ToastProvider
ToastMessages
App

displayToast
toastApi

addToast

</script>
