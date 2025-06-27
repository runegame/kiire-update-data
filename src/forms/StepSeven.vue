<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="ki:flex ki:flex-col ki:gap-8 ki:w-full">
    <div class="ki:flex ki:text-xl ki:font-bold ki:justify-between ki:items-center">
      <div class="text-[#171B5B]">Tamaño y facturación</div>
      <div class="text-gray-500 font-light">7 - 7</div>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="businessSize">
            <span class="number-badge">
              21
            </span>

        ¿De qué tamaño es tu empresa?
      </label>

      <Select
        name="businessSize"
        :options="businessSizeOptions"
        placeholder="Selecciona una opción"
      />

      <Message
        v-if="$form.businessSize?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessSize.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="averageMonthlyRevenue">
            <span class="number-badge">
              22
            </span>

        ¿Cuál es tu facturación promedio mensual?
      </label>

      <Select
        name="averageMonthlyRevenue"
        :options="averageMonthlyRevenueOptions"
        placeholder="Selecciona una opción"
      />

      <Message
        v-if="$form.averageMonthlyRevenue?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.averageMonthlyRevenue.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="website">
            <span class="number-badge">
              23
            </span>

        ¿Tienes un sitio web? Pega el link aquí
      </label>

      <InputText name="website" type="text" placeholder="www.tu-negocio.com" fluid />

      <Message
        v-if="$form.website?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.website.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="website">
            <span class="number-badge">
              24
            </span>

        Déjanos tus redes sociales (opcional)
      </label>

      <div class="ki:flex ki:gap-4">
        <InputText name="instagram" type="text" placeholder="@Instagram" fluid />

        <InputText name="facebook" type="text" placeholder="@Facebook" fluid />

        <InputText name="tiktok" type="text" placeholder="@TikTok" fluid />
      </div>
    </div>

    <Button
      variant="primary"
      type="submit"
      label="Finalizar"
      :loading="loading"
    />

    <BackButton />
  </Form>
</template>

<script setup>
import { Form } from '@primevue/forms';
import { reactive, ref } from 'vue'
import BackButton from '@/components/BackButton.vue'
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()

const loading = ref(false)

const initialValues = reactive({
  businessSize: formStore.formData.businessSize,
  averageMonthlyRevenue: formStore.formData.averageMonthlyRevenue,
  website: formStore.formData.website,
  instagram: formStore.formData.instagram,
  facebook: formStore.formData.facebook,
  tiktok: formStore.formData.tiktok,
});

const averageMonthlyRevenueOptions = [
  'Menos de $1.000.000 COP',
  'Entre $1.000.001 y $10.000.000 COP',
  'Entre $10.000.001 y $20.000.000 COP',
  'Entre $20.000.001 y $50.000.000 COP',
  'Entre $50.000.001 y $100.000.000 COP',
  'Más de $100.000.000 COP',
]

const businessSizeOptions = [
  'Microempresa (hasta 10 empleados).',
  'Pequeña empresa (desde 11 a 50 empleados).',
  'Mediana empresa (desde 51 a 200 empleados).',
  'Gran empresa (más de 200 empleados).',
]

const resolver = ({ values }) => {
  const errors = {};

  if (!values.businessSize) {
    errors.businessSize = [{ message: 'Elige una opción.' }];
  }

  if (!values.averageMonthlyRevenue) {
    errors.averageMonthlyRevenue = [{ message: 'Elige una opción.' }];
  }

  return {
    values,
    errors,
  };
};

const onFormSubmit = async ({ valid, values }) => {
  try {
    if (!valid) return

    formStore.updateFormData(values)

    loading.value= true
    await formStore.submitForm()
    loading.value= false
    formStore.isFinished = true
  } catch (e) {
    console.log(e)
  }
};
</script>
