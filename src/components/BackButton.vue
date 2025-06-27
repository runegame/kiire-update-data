<template>
  <div
    @click="formStore.previousStep()"
    class="ki:flex ki:gap-4 ki:items-center ki:justify-center ki:hover:bg-gray-200 ki:py-2 ki:transition-all ki:rounded ki:cursor-pointer"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C18.6266 0 24 5.37338 24 12C24 18.6266 18.6266 24 12 24C5.37338 24 0 18.6266 0 12C0 5.37338 5.37338 0 12 0Z" fill="#EFF1EC"/>
      <path d="M5.20963 12L11.9018 18.6922L13.6055 16.9884L9.82124 13.2041H18.7905V10.7959H9.82124L13.6055 7.01162L11.9018 5.30786L5.20963 12Z" fill="#ACA9A8"/>
    </svg>

    ATRÁS
  </div>
</template>

<script setup>
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()
</script>
