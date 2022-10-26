<template>
  <ToastProvider>
    <App @add-toast="addToast"/>

    <ToastMessages :displayData="displayToast" />
  </ToastProvider>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import ToastProvider from './components/ToastProvider.vue';
import ToastMessages from './components/ToastMessages.vue';
import {useToast} from './composables/useToast';
import App from './App.vue';
export default defineComponent({
  components: {
    ToastProvider,
    ToastMessages,
    App
  },
  
  setup() { 
      const { toastApi, toastType, toastMessage, toastDuration, displayToast, setAddedToast, updateAddedToast } = useToast();
      
      function addToast(typ: any, msg: any, duration: any) {
        toastType.value = typ
        toastMessage.value = msg
        toastDuration.value = duration
        setAddedToast()
        updateAddedToast(0)
      }
      

      return {
        addToast,
        toastType,
        toastMessage,
        toastDuration,
        toastApi,
        displayToast,
        setAddedToast,
        updateAddedToast,
      }
    }
})
</script>
