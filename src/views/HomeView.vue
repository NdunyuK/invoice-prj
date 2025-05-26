<!-- <template>
<div>

<div class="bg-rose-50 shadow-sm h-[74vh]">
    <div class="flex flex-col h-full justify-around items-center text-center">
    <div class="px-4 w-1/2 mx-8">
    <h1 class="text-6xl font-bold text-gray-900 pb-8">Wedding Photography Invoice Generator</h1>
    <p class="text-2xl text-gray-600">Create polished, professional invoices in seconds. 
       Save time, get paid faster,
       and impress your clients.</p>
    <div class="mt-10">
      <button class="bg-rose-500 hover:bg-pink-600 text-white text-2xl font-semibold px-10 py-2 rounded" @click="showGenerate">
        Generate Your Invoice
      </button>
    </div>
  </div>
  </div>

</div>


<section class="py-8" id="features">
  <div class="w-2/3 mx-auto p-4">
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="text-xl font-semibold mb-2">📸 Tailored for Wedding Photographers</h3>
        <p class="text-gray-600">Customize packages, ceremony details, hours, travel, and more.</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">🧾 Simple & Fast</h3>
        <p class="text-gray-600">Generate and download a PDF invoice in under a minute.</p>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">💼 Professional Format</h3>
        <p class="text-gray-600">Impress your clients with professional, elegant invoices.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-white py-12" id="example">
  <div class="text-center">
    <h2 class="text-2xl font-bold mb-8">How It Works</h2>
  </div>

  <div class="flex flex-row justify-center px-4">
    <div class="mx-16">
      <div class="invoice-preview bg-white p-8 shadow-md rounded-md font-sans max-w-3xl mx-auto">

<div class="flex justify-between items-start mb-8">
<div>
  <p class="text-2xl font-medium font-bold text-gray-800">Jane Doe</p>

</div>
<div class=" text-right ">
  <h1 class="text-2xl font-medium font-bold text-gray-800">Invoice #</h1>
  <p class="text-md text-gray-700 pb-4">INV-001</p>
  <p class="text-md text-gray-500">123 Lane</p>
  <p class="text-md text-gray-500">janedoe@gmail.com</p>
</div>

</div>
<div class="flex flex-row justify-between">
<div class="mb-6" >
  <h2 class="text-lg font-semibold text-gray-700">Billed To:</h2>
  <p class="text-lg font-semibold text-gray-700">John Doe</p>
  <p class="text-gray-500 text-md">456 Lane</p>
  <p class="text-gray-500 text-md">johndoe@gmail.com</p>
</div>
<div class="mb-6">
  <div class="flex flex-row justify-end items-center">
    <h2 class="text-lg font-semibold text-gray-700">Invoice Date: </h2>
    <span class="text-gray-500 text-md pl-4">11th June 2025</span>
  </div>
  <div class="flex flex-row justify-end items-center">
    <h2 class="text-lg font-semibold text-gray-700">Due Date: </h2>
    <span class="text-gray-500 text-md pl-4">11th June 202</span>
  </div>
</div>
</div>

<div class="mb-6 border border-gray-200 rounded-xl p-4">
<div class="grid grid-cols-4 gap-4 border-b pb-2 mb-2">
<span class="text-sm font-semibold text-gray-500">ITEM</span>
<span class="text-sm font-semibold text-gray-500 text-center">QTY</span>
<span class="text-sm font-semibold text-gray-500 text-center">RATE</span>
<span class="text-sm font-semibold text-gray-500 text-right">AMOUNT</span>
</div>

 <div
class="grid grid-cols-4 gap-4 py-2 text-sm text-gray-700"
>
<div>Photoshoot</div>
<div class="text-center">2</div>
<div class="text-center">150</div>
<div class="text-right">300</div>
</div>
</div>

<div class="flex justify-end items-center text-lg font-semibold">
<span class="mr-4">Total Amount:</span>
<span>$300</span>
</div>

<div class="mt-6">
<h3 class="text-md font-semibold text-gray-700">Notes</h3>
<p class="text-md text-gray-600">Thanks for choosing us.</p>
</div>

<div class="mt-4">
<h3 class="text-md font-semibold text-gray-700">Terms & Conditions</h3>
<p class="text-md text-gray-600">Payment due within 30 days.</p>
</div>

<div class="mt-6 text-md text-gray-500">
Thank you for your business. Please make payment within the stated terms.
</div>

</div>
    </div>
    
    <div class="flex flex-col justify-center">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-1">1. Fill in Your Info</h3>
        <p class="text-gray-600">Business name, client details, invoice items.</p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-1">2. Customize Invoice</h3>
        <p class="text-gray-600">Add your rates, services, and custom notes.</p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-1">3. Download as PDF</h3>
        <p class="text-gray-600">Instantly generate a printable, shareable invoice.</p>
      </div>

      <div class="mt-8">
      <button class="bg-rose-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-2 rounded" @click="showGenerate">
        Generate Your Invoice Now
      </button>
    </div>

    </div>
 
  </div>
</section>

<section class="bg-rose-50 py-12" id="pricing">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold mb-2">Need More?</h2>
    <p class="text-gray-700 mb-4">Upgrade to Pro for just $5 and unlock:</p>
    <ul class="text-gray-600 list-disc list-inside mb-6 text-left max-w-md mx-auto">
      <li>Remove watermark</li>
      <li>Save invoice </li>
    </ul>
    <div class="mt-8">
      <button class="bg-rose-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-2 rounded" @click="showGenerate">
        Upgrade & Go Pro
      </button>
    </div>
  </div>
</section>

  </div>

</template> -->



<template>
  <div class="pt-8">
  <!-- Hero Section -->
  <div class="bg-rose-50 shadow-sm min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
    <div class="max-w-3xl">
      <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 pb-6 leading-tight">
        Beautiful Invoices for Wedding Photographers
      </h1>
      <p class="text-xl sm:text-2xl text-gray-600 mb-8">
        Create polished, professional invoices in under a minute. No signup needed.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="border border-rose-500 text-rose-500 hover:bg-rose-100 text-xl font-semibold px-8 py-3 rounded shadow" @click="showGenerate">
          Try It Free (Includes Watermark)
        </button>
        <button  class="bg-rose-500 hover:bg-pink-600 text-white text-xl font-semibold px-8 py-3 rounded shadow" @click="showGenerate">
          Go Pro – $5 AUD (No Watermark)
        </button>
      </div>
    </div>
  </div>
  
  <!-- Trust Signals -->
  <section class="bg-white py-6 border-t border-gray-200">
    <div class="w-11/12 md:w-3/5 mx-auto flex flex-wrap justify-center items-center gap-8 text-center">
      <div>
        <p class="text-gray-600 text-sm">🔒 Secure Payments with Paystack</p>
      </div>
      <div>
        <p class="text-gray-600 text-sm">🇦🇺 Loved by Australian Wedding Photographers</p>
      </div>
      <div>
        <p class="text-gray-600 text-sm">⭐ 100+ Invoices Generated</p>
      </div>
      <div>
        <p class="text-gray-600 text-sm">🧾 No Signup Required</p>
      </div>
    </div>
  </section>
  
  <!-- Benefits Section -->
  <section class="py-12 bg-white" id="features">
    <div class="w-11/12 md:w-4/5 mx-auto">
      <div class="grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 class="text-xl font-semibold mb-2">📸 Built for Wedding Pros</h3>
          <p class="text-gray-600">Include hours, locations, package types, and travel in seconds.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">⚡ Speed Matters</h3>
          <p class="text-gray-600">Generate invoices fast with a clean, focused form — no clutter.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">🖨️ Print-Ready & Professional</h3>
          <p class="text-gray-600">Clients appreciate clean, elegant documents that look the part.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- How it Works -->
  <section class="bg-rose-50 py-12" id="example">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">How It Works</h2>
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-12 px-6">
      <div class="max-w-2xl">
        <div class="invoice-preview bg-white p-6 shadow-md rounded-md">
          <!-- Use an illustrative static invoice preview or thumbnail -->
          <img src="/images/sampleInvoice.jpg" alt="Invoice Preview" >
        </div>
      </div>
  
      <div class="flex flex-col justify-center">
        <div class="mb-6">
          <h3 class="text-lg font-semibold">1. Fill in Your Info</h3>
          <p class="text-gray-600">Business name, client details, invoice items.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold">2. Customize Invoice</h3>
          <p class="text-gray-600">Add rates, descriptions, and personalized notes.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold">3. Download Instantly</h3>
          <p class="text-gray-600">Get your PDF instantly. No login. No wait.</p>
        </div>
        <button class="mt-8 bg-rose-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-3 rounded shadow" @click="showGenerate">
          Generate Invoice Now
        </button>
      </div>
    </div>
  </section>
  
  <!-- Pricing CTA -->
  <section class="bg-white py-12" id="pricing">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-3">Upgrade to Pro – Just $5 AUD</h2>
      <p class="text-lg text-gray-700 mb-6">Pay once to unlock premium features:</p>
      <ul class="text-gray-600 list-disc list-inside mb-8 text-left max-w-md mx-auto">
        <li>Watermark-free invoice PDF</li>
        <li>High-resolution print quality</li>
        <li>Priority download access</li>
      </ul>
  
      <!-- Comparison Table -->
      <div class="max-w-2xl mx-auto mt-8 text-sm text-gray-700">
        <table class="w-full border border-gray-200 text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3 border-r border-gray-200">Feature</th>
              <th class="p-3 border-r border-gray-200">Free</th>
              <th class="p-3">Pro ($5 AUD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border-t border-gray-200">Watermark</td>
              <td class="p-3 border-t border-gray-200 text-center text-rose-500">✔️</td>
              <td class="p-3 border-t border-gray-200 text-center">❌</td>
            </tr>
            <tr>
              <td class="p-3 border-t border-gray-200">High-resolution</td>
              <td class="p-3 border-t border-gray-200 text-center">❌</td>
              <td class="p-3 border-t border-gray-200 text-center">✔️</td>
            </tr>
            <tr>
              <td class="p-3 border-t border-gray-200">Instant Download</td>
              <td class="p-3 border-t border-gray-200 text-center">✔️</td>
              <td class="p-3 border-t border-gray-200 text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <button class="mt-8 bg-rose-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded shadow" @click="showGenerate">
        Upgrade & Download
      </button>
    </div>
  </section>
  </div>
  </template>
  

<script setup>


import { useRouter } from 'vue-router'


const router = useRouter()
function showGenerate (){
  router.push ({ name: 'Generate'})
}
</script>