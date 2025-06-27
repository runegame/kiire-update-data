<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="ki:flex ki:flex-col ki:gap-8 ki:w-full">
    <div class="ki:flex ki:text-xl ki:font-bold ki:justify-between ki:items-center">
      <div class="text-[#171B5B]">Personas clave</div>
      <div class="text-gray-500 font-light">3 - 7</div>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="fullName">
            <span class="number-badge">
              09
            </span>

        ¿Cómo se llama el administrador del local?
      </label>

      <InputText
        name="businessAdminName"
        type="text"
        placeholder="Escribe el nombre de tu negocio"
        fluid
      />

      <Message
        v-if="$form.businessAdminName?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessAdminName.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="businessPhone">
            <span class="number-badge">
              10
            </span>

        Número de celular del local comercial
      </label>

      <InputText name="businessPhone" type="text" placeholder="Escribe el número de celular del local comercial" fluid />

      <Message
        v-if="$form.businessPhone?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessPhone.error?.message }}
      </Message>
    </div>

    <Button
      variant="primary"
      type="submit"
      label="Siguiente"
    />

    <BackButton />
  </Form>
</template>

<script setup>
import { Form } from '@primevue/forms';

import { reactive } from 'vue'
import BackButton from '@/components/BackButton.vue'
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()

const initialValues = reactive({
  businessAdminName: formStore.formData.businessAdminName,
  businessPhone: formStore.formData.businessPhone,
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.businessAdminName) {
    errors.businessAdminName = [{ message: 'El administrador es necesario.' }];
  }

  if (!values.businessPhone) {
    errors.businessPhone = [{ message: 'El teléfono es necesario.' }];
  }

  return {
    values,
    errors,
  };
};
const onFormSubmit = ({ valid, values }) => {
  if (valid) {
    formStore.updateFormData(values)
    formStore.nextStep()
  }
};
</script>
