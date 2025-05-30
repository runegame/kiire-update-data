import { defineStore } from 'pinia'

export const useFormStore = defineStore('forms', {
  state: () => ({
    formData: {
      fullName: '',
      birthday: '',
      typeOfPerson: '',
      identification: '',
      businessName: '',
      nit: '',
      businessCity: '',
      businessAddress: '',
      businessAdminName: '',
      businessPhone: '',
      mainPhone: '',
      secondaryPhone: '',
      mainEmail: '',
      secondaryEmail: '',
      businessActivity: '',
      preferredPaymentMethods: '',
      usesOnlyKiire: '',
      communicationChannels: '',
      receiveInformation: '',
      receiveCredits: '',
      businessSize: '',
      averageMonthlyRevenue: '',
      website: '',
      instagram: '',
      facebook: '',
      tiktok: '',
    },
    step: 1,
  }),
  actions: {
    previousStep() {
      if (this.step === 1) return
      this.step--
    },
    nextStep() {
      if (this.step === 7) return
      this.step++
    },
    updateFormData(data) {
      this.formData = { ...this.formData, ...data }
    }
  },
  persist: true,
})
