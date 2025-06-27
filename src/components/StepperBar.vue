<template>
  <div class="ki:bg-[#EFF1EC] ki:h-[2px] ki:w-full">
    <div class="ki:h-[2px] ki:bg-[#171B5B]" :style="{width: `calc(100% / 7 * ${formStore.step})`}"></div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()
</script>
