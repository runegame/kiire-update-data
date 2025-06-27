import { defineStore } from 'pinia'
import axios from 'axios'

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
    isFinished: false,
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
    },
    resetFormData() {
      this.formData = {
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
      }
      this.step = 1
      this.isFinished = false
    },
    async submitForm() {
      const data = {
        '01 - Nombre': this.formData.fullName,
        '02 - Nacimiento': this.formData.birthday,
        '03 - Tipo persona': this.formData.typeOfPerson,
        '04 - Cedula': this.formData.identification,
        '05 - Nombre negocio': this.formData.businessName,
        '06 - Nit': this.formData.nit,
        '07 - Ubicacion negocio': this.formData.businessCity.name,
        '08 - Direccion Negocio': this.formData.businessAddress,
        '09 - Administrador': this.formData.businessAdminName,
        '10 - Celular del local': this.formData.businessPhone,
        '11 - Numero principal': this.formData.mainPhone,
        '12 - Numero secundario': this.formData.secondaryPhone,
        '13 - Correo principal': this.formData.mainEmail,
        '14 - Correo secundario': this.formData.secondaryEmail,
        '15 - Actividad economica': this.formData.businessActivity,
        '16 - Metodo de pago preferido': this.formData.preferredPaymentMethods,
        '17 - Usa solo kiire': this.formData.usesOnlyKiire,
        '18 - Recibir informacion': this.formData.communicationChannels,
        '19 - Quiere recibir informacion': this.formData.receiveInformation,
        '20 - Quiere recibir creditos': this.formData.receiveCredits,
        '21 - Tamano empresa': this.formData.businessSize,
        '22 - Facturacion mensual': this.formData.averageMonthlyRevenue,
        '23 - Sitio web': this.formData.website,
        '24 - Instagram': this.formData.instagram,
        '25 - Facebook': this.formData.facebook,
        '26 - TikTok': this.formData.tiktok,
      }

      const request = {
        method: 'post',
        url: 'https://sheetdb.io/api/v1/lku7ol5i8c9v1',
        data,
      }

      return axios(request)
    }
  },
  persist: true,
})
