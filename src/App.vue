<template>
  <div class="bg-[#F8F8F8]">
    <div class="flex flex-wrap container mx-auto items-center md:min-h-screen w-full">
      <div class="flex flex-col items-center w-full md:w-1/2 gap-4 md:gap-10 p-4">
        <img class="max-w-[80px] md:max-w-100%" src="@/assets/icon.png" alt="Icon">

        <div class="text-3xl md:text-6xl font-bold">
          Cuéntanos de ti
        </div>

        <p class="max-w-[300px] text-center">Para darte todo lo mejor de nosotros, porfa contéstanos algunas preguntas</p>
      </div>

      <div class="w-full md:w-1/2 container mx-auto p-4">
        <StepperBar />

        <div class="card flex justify-center mt-6">
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
