<template>
  <div class="ki:bg-[#F8F8F8]">
    <div
      class="finish-screen ki:flex ki:flex-col ki:items-center ki:justify-center ki:gap-10 ki:px-4"
      v-if="formStore.isFinished"
    >
      <img class="ki:mt-20" src="https://kiire.com/sites/default/files/2025-06/Group%2021.png" alt="Check">

      <h2 class="ki:text-2xl ki:md:text-7xl ki:font-bold">¡Eso es todo!</h2>

      <p class="ki:md:text-2xl ki:text-center">Gracias por tu tiempo, <br> pronto te estaremos contactando para darte un detallito</p>

      <div @click="finish" class="flex gap-4 uppercase cursor-pointer">
        <img src="https://kiire.com/sites/default/files/2025-06/Layer%202.png" alt="Arrow Back">

        <span class="ki:underline">ir a kiire.com</span>
      </div>

      <img src="https://kiire.com/sites/default/files/2025-06/Layer_1-2.png" alt="Finish">
    </div>

    <div
      class="ki:flex ki:flex-wrap ki:items-center ki:md:min-h-screen ki:w-full"
      v-else
    >
      <div
        class="left-container ki:flex ki:flex-col ki:items-center ki:justify-center ki:w-full ki:md:w-1/2 ki:gap-4 ki:md:gap-10 ki:p-4 ki:py-10 ki:md:h-screen">
        <img class="ki:max-w-[80px] ki:md:max-w-100%" src="https://kiire.com/sites/default/files/2025-06/icon.png" alt="Icon">

        <div class="ki:text-3xl ki:md:text-6xl ki:font-bold">
          Cuéntanos de ti
        </div>

        <p class="ki:max-w-[300px] ki:text-center">Para darte todo lo mejor de nosotros, porfa contéstanos algunas preguntas</p>
      </div>

      <div class="ki:w-full ki:md:w-1/2 ki:container ki:mx-auto ki:py-10 ki:px-4 ki:lg:px-30">
        <StepperBar />

        <div class="ki:card ki:flex ki:justify-center ki:mt-6">
          <component :is="steps[formStore.step]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StepOne from '@/forms/StepOne.vue'
import StepperBar from '@/components/StepperBar.vue'
import StepTwo from '@/forms/StepTwo.vue'
import StepThree from '@/forms/StepThree.vue'
import StepFour from '@/forms/StepFour.vue'
import StepSix from '@/forms/StepSix.vue'
import StepSeven from '@/forms/StepSeven.vue'
import StepFive from '@/forms/StepFive.vue'

import { useFormStore } from '@/store/forms'

const steps = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
  5: StepFive,
  6: StepSix,
  7: StepSeven,
}

const formStore = useFormStore()

const finish = () => {
  formStore.resetFormData()
  window.location.href = 'https://kiire.com/'
}
</script>

<style scoped>
::v-deep(.p-selectbutton) {
  border: solid 1px #cbd5e1;
}

::v-deep(.p-selectbutton .p-togglebutton) {
  flex: 1 1 0 !important;
  width: 100% !important;
  background-color: transparent !important;
}

::v-deep(.p-togglebutton-checked .p-togglebutton-content) {
  background-color: #171B5B !important;
  color: white !important;
}

::v-deep(.p-inputtext) {
  background-color: transparent !important;
}

::v-deep(.p-select) {
  background-color: transparent !important;
}

::v-deep(.p-inputtext:enabled:focus) {
  border-color: #171B5B !important;
  background-color: #f1f3f0 !important;
}

::v-deep(.p-focus) {
  border-color: #171B5B !important;
  background-color: #f1f3f0 !important;
}

::v-deep(.p-button) {
  background: #defa90 !important;
  color: #171B5B !important;
  border: none;
  text-transform: uppercase;
}

::v-deep(.p-button:hover) {
  background: #b7da5d !important;
  border: none !important;
}
</style>
