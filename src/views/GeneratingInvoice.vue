<template>

  <div class="pt-20 bg-rose-50">
    <div class="flex flex-row justify-evenly">
       <div >
         <InvoiceForm @generateInvoice="handleGenerateInvoice" />  
       </div>
       <div>
         <InvoicePreview :data="invoiceData" @startDownload="handleStartDownload"/>
       </div>
       <InvoiceDownloadModal
        :show="showModal"
        @close="showModal = false"
        @download="handleDownload"
      />

       
     </div>
  </div>

  </template>
   
   <script setup>
   import { reactive, computed, ref } from 'vue'
   import InvoiceForm from '../components/InvoiceForm.vue'
   import InvoicePreview from '../components/InvoicePreview.vue'
   import InvoiceDownloadModal from '../components/InvoiceDownloadModal.vue'

   
   const showModal = ref(false);
   const reference = ref(null);
   const verified = ref(false);

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
    const handleStartDownload =()=>{
      console.log("handleStartDownload")
      showModal.value = true
      console.log("showModal", showModal)
    }
    const handleDownload = async ({ email, pro }) => {
      if (pro) {
        // check if user has paid, or redirect to Stripe
        // generate PDF without watermark and send via email
        await initializePayment(email)
        await verifyPayment()

      } else {
        // generate PDF with watermark and send via email
      }
    };
    const initializePayment = async ( email ) => {
  
        const response = await fetch('/.netlify/functions/createPayment', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          amount: 500, // in Naira
        }),
      });
      console.log("response initializePayment", response)
      const data = await response.json();
      window.location.href = data.authorization_url;
      const access_code = data.access_code;
      const popup = new PaystackPop()
      popup.resumeTransaction(access_code)
      reference.value = data.reference

    };
    const verifyPayment = async ( ) => {
  
    const response = await fetch('/.netlify/functions/verifyPayment?reference=${reference}', {
      method: 'GET',
    });
    const data = await response.json();
    if (data.verified) {
      verified.value = true;

      // Trigger download or redirect to actual invoice
      setTimeout(() => {
        window.location.href = '/download-invoice'; // or generate and download inline
      }, 2000);
    } else {
      verified.value = false;
    }
    };

    

   </script>