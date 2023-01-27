<template>
  <div class="toast-container h-screen w-screen flex justify-center items-center flex-col">
    <button class="info bg-sky-500 py-4 px-10 my-2 rounded-lg transition duration-300 ease-in-out hover:shadow-2xl" @click="addToast('info')">
      SHOW INFO TOAST
    </button>

    <button class="success bg-green-400 py-4 px-10 my-2 rounded-lg transition duration-300 ease-in-out hover:shadow-2xl" @click="addToast('success')">
      SHOW SUCCESS TOAST
    </button>

    <button class="error bg-red-600 py-4 px-10 my-2 rounded-lg transition duration-300 ease-in-out hover:shadow-2xl" @click="addToast('error')">
      SHOW ERROR TOAST
    </button>
    
    <div class="toast-main-container mx-7 max-h-screen min-h-screen w-60 overflow-x-hidden overflow-y-auto absolute right-0 top-0">
      <transition-group tag="ul" name="list" class="container">
        <div v-for="item in displayToast" :key="item" class="text-center my-4 py-3 rounded-lg mx-2 font-semibold text-white" :class="{'bg-sky-500 border border-sky-700 shadow-2xl' : item.type == 'info', 'bg-green-400 border border-green-700 shadow-2xl' : item.type == 'success', 'bg-red-600 border border-red-700 shadow-2xl' : item.type == 'error'}">
          <span class="mx-4">{{ item.message }}</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss">
  .toast-main-container {

    // =================== transition for toast
    .list-move,
    .list-enter-active,
    .list-leave-active {
      transition: 0.5s;
    }

    .list-enter-from
     {
      opacity: 0;
      transform: translateX(50px);
    }

    .list-leave-to {
      opacity: 0;
      transform: translateX(100%);
    }

    .list-leave-active {
        position: absolute;
    }
  }
</style>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import {useToast} from './composables/useToast';
 

  export default defineComponent({
    components: {},
    setup() { 
      const { toastApi, toastType, toastMessage, toastDuration, displayToast, setAddedToast, updateAddedToast } = useToast();
      
      function addToast(typ: any) {
        toastType.value = typ
        toastMessage.value = `This is an ${toastType.value}` 
        toastDuration.value = 3000

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