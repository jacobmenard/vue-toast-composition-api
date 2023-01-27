<template>
    <div class="toast-main-container mx-7 max-h-screen min-h-screen w-60 overflow-x-hidden overflow-y-auto absolute right-0 top-0">
        <transition-group tag="ul" name="list" class="container">
            <div v-for="item in displayData" :key="item" class="text-center my-4 py-3 rounded-lg mx-2 font-semibold text-white" :class="{'bg-sky-500 border border-sky-700 shadow-2xl' : item.type == 'info', 'bg-green-400 border border-green-700 shadow-2xl' : item.type == 'success', 'bg-red-600 border border-red-700 shadow-2xl' : item.type == 'error'}">
            <span class="mx-4">{{ item.message }}</span>
            </div>
        </transition-group>
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

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  displayData: { default: [] }
})


// export default defineComponent({
//     props: {
//         displayData: { default : [] }
//     },
//     setup(props) {

//     }
// })
</script>