<template>
  <div class="bg-[#EFF1EC] h-[2px] w-full">
    <div class="h-[2px] bg-[#171B5B]" :style="{width: `calc(100% / 7 * ${formStore.step})`}"></div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()
</script>
