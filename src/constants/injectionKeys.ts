import {  inject } from 'vue';
export function injectionKeys() {
    const getDisplayToast = inject('getDisplayToast')

    return {
        getDisplayToast
    }
}