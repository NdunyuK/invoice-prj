<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <p v-if="paymentError" class="text-red-500 text-sm text-center">
          Error processing payment, please try again.
        </p>
        <h2 class="text-xl font-semibold mb-4">Download Your Invoice PDF</h2>
  
        <label class="block mb-2 text-sm font-medium">Enter your email</label>
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="w-full px-4 py-2 mb-4 border rounded-lg"
        />
  
        <fieldset class="mb-4">
          <legend class="text-sm font-medium mb-2">Choose an option</legend>
          <label class="flex items-center mb-2 cursor-pointer">
            <input
              type="radio"
              value="free"
              v-model="downloadOption"
              class="mr-2"
            />
            Download for &nbsp;<strong>FREE</strong>&nbsp; with watermark
          </label>
  
          <label class="flex items-center cursor-pointer">
            <input
              type="radio"
              value="pro"
              v-model="downloadOption"
              class="mr-2"
            />
            Download watermark-free for &nbsp;<strong>$5 AUD</strong>
          </label>
        </fieldset>
  
        <button
          @click="handleDownload"
          class="w-full py-2 rounded-lg text-white"
          :class="downloadOption === 'free' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-rose-500 hover:bg-pink-600'"
        >
          {{ downloadOption === 'free' ? 'Download Now' : 'Proceed to Payment' }}
        </button>
  
        <button
          @click="close"
          class="mt-4 text-sm text-gray-500 hover:underline w-full text-center pb-2"
        >
          Cancel
        </button>

        <p v-if="error" class="mt-3 text-red-500 text-sm text-center">
          {{ error }}
        </p>
  
        <!-- <p class="mt-3 text-xs text-gray-500 text-center">
          You’ll receive your invoice PDF via email regardless of your choice.
        </p> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    paymentError: Boolean
  });
  const emit = defineEmits(['close', 'download']);
  
  const email = ref('');
  const downloadOption = ref(null);
  const error = ref('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleDownload = async () => {
    console.log("handling download of pdf")
    if (!email.value || !downloadOption.value) {
      error.value = "Email and Download Option Required"
      console.log("no email",error )
      return
    };

    error.value = '';
    if (!validateEmail(email.value)) {
      error.value = 'Please enter a valid email address.';
      return;
    }

    if (downloadOption.value === 'free') {
      emit('download', { email: email.value, pro: false });
    } else if (downloadOption.value === 'pro') {
      emit('download', { email: email.value, pro: true });
    }
    close();
  };
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  