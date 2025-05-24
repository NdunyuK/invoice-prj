<template>

  <div class="pt-20 bg-rose-50">
    <div class="flex flex-row justify-evenly">
       <div >
         <InvoiceForm @generateInvoice="handleGenerateInvoice" :key="formKey" />  
       </div>
       <div>
         <InvoicePreview :data="invoiceData" @startDownload="handleStartDownload"/>
       </div>
       <InvoiceDownloadModal
        :show="showModal"
        :paymentError="paymentError"
        @close="showModal = false"
        @download="handleDownload"
      />
       
     </div>
  </div>

  </template>
   
   <script setup>
   import { reactive, computed, ref, onMounted } from 'vue'
   import InvoiceForm from '../components/InvoiceForm.vue'
   import InvoicePreview from '../components/InvoicePreview.vue'
   import InvoiceDownloadModal from '../components/InvoiceDownloadModal.vue'
   import { generatePDF } from '../utils/pdfGenerator.js'


   
   const showModal = ref(false);
   const verified = ref(false);
   const receivingPdfEmail =ref(null);
   const paymentError = ref(false)
   const emailList = ref([])


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

    // const form = reactive({...defaultInvoice})
    const formKey = ref(0);
    const form = reactive(structuredClone(defaultInvoice));

    // merge incoming data with defaults
    const invoiceData = computed(() => ({
        ...defaultInvoice,
        ...form,
        items: form.items ?? defaultInvoice.items
    }))


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
    const handleDownload =  async ({ email, pro }) => {
      if (pro) {
        // check if user has paid, or redirect to Stripe
        console.log("window.PaystackPop", window.PaystackPop)
        console.log("email and stuff at setup", email, pro)
        loadPaystackScript(() => {
          const handler = window.PaystackPop.setup({
          key: 'pk_test_3e87fde9b868de5753a937ef6a935eedaf9a59bf',
          email: email,
          amount: 3.5 * 100,
          currency: 'USD',
          onClose: () => { /* optional cancel logic */ },
          callback:  (response) => {
            console.log("at callback on pop")
            if (!response || !response.reference) {
              console.error('Invalid response from Paystack', response);
              return;
            }
            // Proceed to generate the invoice here
             verifyPayment(response.reference)
            
          }
        });
        handler.openIframe();
        })



      } else {
        // generate PDF with watermark and send via em
        console.log("generating pdf with watermark", verified.value)
        generatePDF(invoiceData.value, verified.value)
      }
      receivingPdfEmail.value = email

      const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzwpvQBDrxuhOTxVnMseRg8TcfDotucODJkg6QsHub5FtuQofYED8QZ0oqj_cbTGLeDTw/exec'; 
      
      if (!emailList.value.includes(email)) {
        emailList.value.push(email);
        try {
          const res = await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors',
          });
          console.log("result of google sheets", res)
        } catch (e) {
          console.error("error calling google sheets", e)
        }
      }


 
    };
    const verifyPayment = async ( reference) => {
      console.log("calling verify payment")
      if (!reference) {
        console.error("Missing reference for verification");
        return;
      }

    const resetForm = () => {
      console.log("resetting form")
      Object.assign(form, structuredClone(defaultInvoice));
      formKey.value++; // this will force the form to fully re-render
      console.log("form after reset", form)

      console.log("invoice data after reset", invoiceData)
    };
  
    const response = await fetch(`/.netlify/functions/verifyPayment?reference=${reference}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json', 
        },
    });
    console.log("response from backend for verify", response)
    const data = await response.json();
    console.log("data transformed", data)
    if (data.verified) {
      verified.value = true;
      generatePDF(invoiceData.value, verified.value, resetForm)
      resetForm()

    } else {
      verified.value = false;
      paymentError.value = true;
      showModal.value =true
    }

    };
    
    const loadPaystackScript = (callback) =>{
      // Remove existing script if it exists
      const oldScript = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
      if (oldScript) oldScript.remove();

      // Create a new script tag
      const script = document.createElement('script');
      script.src = "https://js.paystack.co/v1/inline.js";
      script.onload = callback;
      document.body.appendChild(script);
    };


   </script>