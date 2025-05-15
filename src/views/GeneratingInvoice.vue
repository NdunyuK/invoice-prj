<template>

  <div class="pt-20 bg-rose-50">
    <div class="flex flex-row justify-around">
       <div >
         <InvoiceForm @generateInvoice="handleGenerateInvoice" />  
       </div>
       <div>
         <InvoicePreview  :data="invoiceData"/>
       </div>
       
     </div>
  </div>

  </template>
   
   <script setup>
   import { reactive, computed } from 'vue'
   import InvoiceForm from '../components/InvoiceForm.vue'
   import InvoicePreview from '../components/InvoicePreview.vue'
   
   

   const defaultInvoice = {
        myName: 'Jane Doe',
        myAddress: '123 Main St, City, Country',
        myEmail: 'jane@example.com',
        invoiceNumber: '0001',
        date: new Date().toISOString().substr(0, 10),
        dueDate: new Date().toISOString().substr(0, 10),
        clientName: 'John Doe',
        clientAddress: '456 Main St, City, Country',
        clientEmail: 'john@example.com',
        items: [
            { description: 'Service or Product', quantity: 1, rate: 100.0 }
        ],
        notes: 'Thanks for choosing us.',
        terms: 'Payment due within 30 days.',
        totalAmount: 0
    }

    const form = reactive({...defaultInvoice})
    // merge incoming data with defaults
    const invoiceData = computed(() => ({
        ...defaultInvoice,
        ...form,
        items: form.items ?? defaultInvoice.items
    }))
    // const handleGenerateInvoice = (data) => {
    //     Object.assign(form, invoiceData)
    // }
    const handleGenerateInvoice = (data) => {
        for (const key in data) {
            const value = data[key]
            if (
            value !== '' &&
            value !== undefined &&
            !(Array.isArray(value) && value.length === 0)
            ) {
            form[key] = value
            }
        }
    }

    console.log("defaultInvoice", defaultInvoice)

    console.log("form", form)
    // console.log("invoiceData", invoiceData)

   </script>