import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import ToggleButton from 'primevue/togglebutton'

import Tooltip from 'primevue/tooltip'

import ConfirmationService from 'primevue/confirmationservice'

import App from './App.vue'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/main.css'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(ConfirmationService)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Image', Image)
app.component('ToggleButton', ToggleButton)

app.directive('tooltip', Tooltip)

app.mount('#app')
