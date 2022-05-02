import OutlinedButton from '@/components/Buttons/OutlinedButton.vue'
import OutlinedButtonIcon from '@/components/Buttons/OutlinedButtonIcon.vue'

const OutlinedButtonSimple = {
    install(Vue) {
        Vue.component("outlined-button", OutlinedButton)
        Vue.component("outlined-button-icon", OutlinedButtonIcon)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(OutlinedButtonSimple);
}

export default OutlinedButtonSimple;