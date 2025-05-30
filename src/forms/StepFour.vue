<template>
  <Form
    v-slot="$form"
    :initialValues
    :resolver
    @submit="onFormSubmit"
    class="flex flex-col gap-8 w-full"
  >
    <div class="flex text-xl font-bold justify-between items-center">
      <div class="text-[#171B5B]">Tus contactos</div>
      <div class="text-gray-500 font-light">4 - 7</div>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="mainPhone">
            <span class="number-badge">
              11
            </span>

        Tu número de celular principal
      </label>

      <InputText
        name="mainPhone"
        type="text"
        placeholder="Escribe tu número principal"
        fluid />

      <Message
        v-if="$form.mainPhone?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.mainPhone.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="fullName">
            <span class="number-badge">
              12
            </span>

        ¿Tienes un celular secundario? (opcional)
      </label>

      <InputText
        name="secondaryPhone"
        type="text"
        placeholder="Escribe tu número secundario"
        fluid
      />

      <Message
        v-if="$form.secondaryPhone?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.secondaryPhone.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="fullName">
            <span class="number-badge">
              13
            </span>

        Correo principal
      </label>

      <InputText
        name="mainEmail"
        type="text"
        placeholder="Escribe tu correo principal"
        fluid
      />

      <Message
        v-if="$form.mainEmail?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.mainEmail.error?.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-4" for="fullName">
            <span class="number-badge">
              14
            </span>

        Correo secundario (opcional)
      </label>

      <InputText
        name="secondaryEmail"
        type="text"
        placeholder="Escribe tu correo secundario"
        fluid
      />

      <Message
        v-if="$form.secondaryEmail?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.secondaryEmail.error?.message }}
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
  mainPhone: formStore.formData.mainPhone,
  secondaryPhone: formStore.formData.secondaryPhone,
  mainEmail: formStore.formData.mainEmail,
  secondaryEmail: formStore.formData.secondaryEmail,
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.mainPhone) {
    errors.mainPhone = [{ message: 'Tu teléfono es necesario.' }];
  }

  if (!values.mainEmail) {
    errors.mainEmail = [{ message: 'Tu correo es necesario.' }];
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
