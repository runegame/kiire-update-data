<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="ki:flex ki:flex-col ki:gap-8 ki:w-full">
    <div class="ki:flex ki:text-xl ki:font-bold ki:justify-between ki:items-center">
      <div class="text-[#171B5B]">Comunicaciones</div>
      <div class="text-gray-500 font-light">6 - 7</div>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="fullName">
            <span class="number-badge">
              18
            </span>

        ¿Por dónde quieres recibir información?
      </label>

      <div class="ki:flex ki:flex-col ki:gap-2">
        <RadioButtonGroup name="communicationChannels" class="ki:flex flex-wrap ki:gap-4">
          <div class="ki:flex ki:items-center ki:gap-2">
            <RadioButton inputId="ambos" value="Ambos" />
            <label for="ambos">Ambos</label>
          </div>
          <div class="ki:flex ki:items-center ki:gap-2">
            <RadioButton inputId="celular" value="Celular" />
            <label for="celular">Celular</label>
          </div>
          <div class="ki:flex ki:items-center ki:gap-2">
            <RadioButton inputId="email" value="Correo electrónico" />
            <label for="email">Correo electrónico</label>
          </div>
        </RadioButtonGroup>

        <Message
          v-if="$form.communicationChannels?.invalid"
          severity="error"
          size="small"
          variant="simple">
          {{ $form.communicationChannels.error?.message }}
        </Message>
      </div>

      <Message
        v-if="$form.fullName?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.fullName.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="receiveInformation">
            <span class="number-badge">
              19
            </span>
        ¿Te interesa recibir información Kiire y pagos?
      </label>

      <SelectButton
        name="receiveInformation"
        :options="yesNoOptions"
      />

      <Message
        v-if="$form.receiveInformation?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.receiveInformation.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="receiveCredits">
            <span class="number-badge">
              20
            </span>
        ¿Te gustaría recibir créditos que puedas pagar con tu dispositivo Kiire?
      </label>

      <SelectButton
        name="receiveCredits"
        :options="yesNoOptions"
      />

      <Message
        v-if="$form.receiveCredits?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.receiveCredits.error?.message }}
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

import { reactive } from 'vue';
import BackButton from '@/components/BackButton.vue'
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()

const initialValues = reactive({
  communicationChannels: formStore.formData.communicationChannels,
  receiveInformation: formStore.formData.receiveInformation,
  receiveCredits: formStore.formData.receiveCredits,
});

const yesNoOptions = ['Si', 'No']

const resolver = ({ values }) => {
  const errors = {};

  if (!values.communicationChannels) {
    errors.communicationChannels = [{ message: 'Selecciona una opción.' }];
  }

  if (!values.receiveInformation) {
    errors.receiveInformation = [{ message: 'Selecciona una opción.' }];
  }

  if (!values.receiveCredits) {
    errors.receiveCredits = [{ message: 'Selecciona una opción' }];
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
