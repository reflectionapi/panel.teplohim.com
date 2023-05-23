import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'
import Dropdown from 'primevue/dropdown'
import ProgressBar from 'primevue/progressbar'
import Slider from 'primevue/slider'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import AutoComplete from 'primevue/autocomplete'
import Avatar from 'primevue/avatar'
import Image from 'primevue/image'
import ToggleButton from 'primevue/togglebutton'

import Ripple from 'primevue/ripple'
import BadgeDirective from 'primevue/badgedirective'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'
import FocusTrap from 'primevue/focustrap'

import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'

import App from './App.vue'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/main.css'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('MultiSelect', MultiSelect)
app.component('Calendar', Calendar)
app.component('InputNumber', InputNumber)
app.component('Tag', Tag)
app.component('Dropdown', Dropdown)
app.component('ProgressBar', ProgressBar)
app.component('Slider', Slider)
app.component('TriStateCheckbox', TriStateCheckbox)
app.component('AutoComplete', AutoComplete)
app.component('Avatar', Avatar)
app.component('Image', Image)
app.component('ToggleButton', ToggleButton)

app.directive('tooltip', Tooltip)
app.directive('badge', BadgeDirective)
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.directive('focustrap', FocusTrap)

app.mount('#app')
