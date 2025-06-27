<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="ki:flex ki:flex-col ki:gap-8 ki:w-full">
    <div class="ki:flex ki:text-xl ki:font-bold ki:justify-between ki:items-center">
      <div class="text-[#171B5B]">Tamaño y facturación</div>
      <div class="text-gray-500 font-light">5 - 7</div>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="businessActivity">
            <span class="number-badge">
              15
            </span>

        ¿Cuál es la actividad económica de tu negocio?
      </label>

      <Select
        name="businessActivity"
        :options="economicActivities"
        placeholder="Selecciona una opción"
      />

      <Message
        v-if="$form.businessActivity?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessActivity.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="preferredPaymentMethods">
            <span class="number-badge">
              16
            </span>

        ¿Qué método de pago prefieren tus clientes?
      </label>

      <Select
        name="preferredPaymentMethods"
        :options="preferredPaymentMethods"
        placeholder="Selecciona una opción"
      />

      <Message
        v-if="$form.preferredPaymentMethods?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.preferredPaymentMethods.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="usesOnlyKiire">
            <span class="number-badge">
              17
            </span>
        ¿Usas solo Kiire o tienes otras opciones de pago?
      </label>

      <SelectButton
        name="usesOnlyKiire"
        :options="usesOnlyKiireOptions"
      />

      <Message
        v-if="$form.usesOnlyKiire?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.usesOnlyKiire.error?.message }}
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
  businessActivity: formStore.formData.businessActivity,
  preferredPaymentMethods: formStore.formData.preferredPaymentMethods,
  usesOnlyKiire: formStore.formData.usesOnlyKiire,
});

const usesOnlyKiireOptions = ['Solo Kiire', 'Kiire y también otras']

const preferredPaymentMethods = [
  'Tarjeta de débito o crédito',
  'Código QR',
  'Link de pagos',
  'Efectivo',
]

const economicActivities = [
  "Agricultura",
  "Ganadería",
  "Silvicultura",
  "Pesca",
  "Minería",
  "Manufactura",
  "Construcción",
  "Comercio al por mayor",
  "Comercio al por menor",
  "Transporte y logística",
  "Almacenamiento",
  "Información y comunicaciones",
  "Servicios financieros y de seguros",
  "Actividades inmobiliarias",
  "Servicios profesionales, científicos y técnicos",
  "Servicios administrativos y de apoyo",
  "Administración pública",
  "Educación",
  "Salud humana y asistencia social",
  "Artes, entretenimiento y recreación",
  "Alojamiento y servicios de comida",
  "Suministro de electricidad, gas y agua",
  "Gestión de residuos y saneamiento",
  "Reparación de vehículos automotores y motocicletas",
  "Otras actividades de servicios",
]

const resolver = ({ values }) => {
  const errors = {};

  if (!values.businessActivity) {
    errors.businessActivity = [{ message: 'Selecciona la actividad económica de tu negocio.' }];
  }

  if (!values.preferredPaymentMethods) {
    errors.preferredPaymentMethods = [{ message: 'Selecciona que métodos de pago prefieren tus clientes.' }];
  }

  if (!values.usesOnlyKiire) {
    errors.usesOnlyKiire = [{ message: 'Selecciona una opción' }];
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
