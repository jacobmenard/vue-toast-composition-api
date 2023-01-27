import { ref, computed, watch, VueElement } from 'vue';

export function useToast() {
    const toastApi: any = ref([]);
    const toastType: any = ref('');
    const toastMessage: any = ref('');
    const toastDuration: any = ref(3000);
    const toastCount: any = ref(0)

    const displayToast = computed(function() {
        const modToast = toastApi.value.map((res: any) => {
            
            return res
        })

        return modToast
    })

    watch(toastApi, function(newValue) {
        console.log('t')
    })

    function setAddedToast() {
        toastApi.value.push({
            type: toastType.value,
            message: toastMessage.value,
            isShow: true,
        })
        
    }

    function updateAddedToast(idx: any) {
        setTimeout(() => {
            toastApi.value.splice(idx, 1)
          }, toastDuration.value);   

    }

    return {
        toastApi,
        toastType,
        toastMessage,
        toastDuration,
        toastCount,
        displayToast,
        setAddedToast,
        updateAddedToast
    }

}