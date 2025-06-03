import './index.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import {
  AutoComplete,
  Button,
  InputMask,
  InputText,
  Message, RadioButton, RadioButtonGroup, Select,
  SelectButton,
  Toast
} from 'primevue'
import { definePreset } from '@primeuix/themes'
import pinia from '@/store/index.js'

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      color: '#007bff',     // color de fondo del botón primario
      contrast: '#ffffff',  // color del texto del botón primario
      shade: '#0056b3',     // color al hacer hover o focus
    }
  }
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: false,
    }
  }
});

app.use(pinia)

app.use(ToastService)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Toast', Toast)
app.component('InputText', InputText)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Message', Message)
// eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
app.component('Button', Button)
app.component('SelectButton', SelectButton)
app.component('InputMask', InputMask)
app.component('AutoComplete', AutoComplete)
app.component('RadioButtonGroup', RadioButtonGroup)
app.component('RadioButton', RadioButton)
// eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
app.component('Select', Select)

app.mount('#update-data-form')
