<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="ki:flex ki:flex-col ki:gap-8 ki:w-full">
    <div class="ki:flex ki:text-xl ki:font-bold ki:justify-between ki:items-center">
      <div class="ki:text-[#171B5B]">Tu negocio</div>
      <div class="ki:text-gray-500 ki:font-light">2 - 7</div>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="fullName">
            <span class="number-badge">
              05
            </span>

        ¿Cómo se llama tu negocio?
      </label>

      <InputText name="businessName" type="text" placeholder="Escribe el nombre de tu negocio" fluid />

      <Message
        v-if="$form.businessName?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessName.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="nit">
            <span class="number-badge">
              06
            </span>

        ¿Cuál es tu NIT?
      </label>

      <InputText name="nit" type="text" placeholder="Escribe el número de NIT" fluid />

      <Message
        v-if="$form.nit?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.nit.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="businessCity">
            <span class="number-badge">
              07
            </span>
        ¿Dónde está ubicado tu negocio?
      </label>

      <AutoComplete
        name="businessCity"
        :suggestions="filteredCities"
        option-label="name"
        forceSelection
        placeholder="Selecciona tu ciudad"
        @complete="search"
        fluid
      />

      <Message
        v-if="$form.businessCity?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessCity.error?.message }}
      </Message>
    </div>

    <div class="ki:flex ki:flex-col ki:gap-2">
      <label class="ki:flex ki:items-center ki:gap-4" for="businessAddress">
            <span class="number-badge">
              08
            </span>
        Dirección de tu negocio:
      </label>

      <InputText
        name="businessAddress"
        type="text"
        placeholder="Ejemplo: Cl 34 Sur #35 - 86"
        fluid
      />

      <Message
        v-if="$form.businessAddress?.invalid"
        severity="error"
        size="small"
        variant="simple">
        {{ $form.businessAddress.error?.message }}
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
import { cities } from '@/utils/cities.js'
import { reactive, ref } from 'vue'
import BackButton from '@/components/BackButton.vue'
import { useFormStore } from '@/store/forms.js'

const formStore = useFormStore()

const filteredCities = ref();

const initialValues = reactive({
  businessName: formStore.formData.businessName,
  nit: formStore.formData.nit,
  businessCity: formStore.formData.businessCity,
  businessAddress: formStore.formData.businessAddress,
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.businessName) {
    errors.businessName = [{ message: 'El nombre de tu negocio es necesario.' }];
  }

  if (!values.nit) {
    errors.nit = [{ message: 'El NIT es necesario.' }];
  }

  if (!values.businessCity) {
    errors.businessCity = [{ message: 'Elige una ciudad.' }];
  }

  if (!values.businessAddress) {
    errors.businessAddress = [{ message: 'La dirección de tu negocio es necesaria.' }];
  }

  return {
    values,
    errors,
  };
};

const search = (event) => {
  if (!event.query.trim().length) {
    filteredCities.value = [...cities];
  } else {
    filteredCities.value = cities.filter((city) => {
      return city.name.toLowerCase().startsWith(event.query.toLowerCase());
    });
  }
}

const onFormSubmit = ({ valid, values }) => {
  if (valid) {
    formStore.updateFormData(values)
    formStore.nextStep()
  }
};
</script>
