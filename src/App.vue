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
    
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const emits = defineEmits([
    'add-toast'
  ])
  
  function addToast(typ: any) {
    var toastType = typ,
        toastMsg = `This is an ${toastType}`,
        toastDur = 3000

        emits('add-toast', toastType, toastMsg, toastDur)
  }
  
  addToast

  // export default defineComponent({
  //   emits: [
  //     'add-toast'
  //   ],
  //   setup(_, context) { 
      
  //     function addToast(typ: any) {
  //       var toastType = typ,
  //       toastMsg = `This is an ${toastType}`,
  //       toastDur = 3000

  //       context.emit('add-toast', toastType, toastMsg, toastDur)
  //     }

  //     return {
  //       addToast,
  //     }
  //   }
  // })
</script>