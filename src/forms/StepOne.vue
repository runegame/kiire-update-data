<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-8 w-full">
    <div class="flex text-xl font-bold justify-between items-center">
      <div class="text-[#171B5B]">Tu identidad</div>
      <div class="text-gray-500 font-light">1 - 7</div>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="fullName">
            <span class="number-badge">
              01
            </span>

        ¿Cómo te llamas?
      </label>

      <InputText name="fullName" type="text" placeholder="Escribe tu nombre" fluid />

      <Message
        v-if="$form.fullName?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.fullName.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="birthday">
            <span class="number-badge">
              02
            </span>

        ¿Cuando naciste?
      </label>

      <InputMask
        name="birthday"
        placeholder="dd/mm/yyyy"
        mask="99/99/9999"
        slotChar="dd/mm/yyyy"
        fluid
      />

      <Message
        v-if="$form.birthday?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.birthday.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="typeOfPerson">
            <span class="number-badge">
              03
            </span>
        ¿Eres persona natural o jurídica?
      </label>

      <SelectButton
        name="typeOfPerson"
        :options="optionsTypeOfPerson"
      />

      <Message
        v-if="$form.typeOfPerson?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.typeOfPerson.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="identification">
            <span class="number-badge">
              04
            </span>
        ¿Cúal es tu número de cédula?
      </label>

      <InputText
        name="identification"
        type="text"
        placeholder="Escribe tu número de cédula"
        fluid
      />

      <Message
        v-if="$form.username?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.username.error?.message }}
      </Message>
    </div>

    <Button
      variant="primary"
      type="submit"
      label="Siguiente"
    />
  </Form>
</template>

<script setup>
import { Form } from '@primevue/forms';

import { reactive } from 'vue';
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()

const initialValues = reactive({
  fullName: formStore.formData.fullName,
  birthday: formStore.formData.birthday,
  typeOfPerson: formStore.formData.typeOfPerson,
  identification: formStore.formData.identification,
});

const optionsTypeOfPerson = ['Natural', 'Jurídica']

const resolver = ({ values }) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = [{ message: 'Tu nombre es necesario.' }];
  }

  if (!values.birthday) {
    errors.birthday = [{ message: 'Tu fecha de nacimiento es necesaria.' }];
  }

  if (!values.typeOfPerson) {
    errors.typeOfPerson = [{ message: 'Elige el tipo de persona' }];
  }

  if (!values.identification) {
    errors.identification = [{ message: 'Tu identificación es necesaria.' }];
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
