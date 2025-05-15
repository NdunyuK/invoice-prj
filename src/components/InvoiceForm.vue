<template>
  <form @submit.prevent="submit" class="bg-white p-6 rounded-lg shadow-md space-y-6 w-full max-w-2xl mx-auto">
    <h2 class="text-2xl font-semibold text-gray-800">Invoice Details</h2>

    <!-- Your Info -->
     <div class="flex flex-row justify-between">
      <div class="flex flex-col">
      <span class="text-xl font-semibold text-gray-800 mb-1">Bill From:</span>
      <div>
        <label class="label">Name</label>
        <input v-model="form.myName" class="input" placeholder="Your Name" />
      </div>
      <div>
        <label class="label">Email</label>
        <input v-model="form.myEmail" class="input" placeholder="Your Email" />
      </div>
      <div class="md:col-span-2">
        <label class="label">Address</label>
        <input v-model="form.myAddress" class="input" placeholder="Your Address" />
      </div>
    </div>

    <!-- Client Info -->
    <div class="flex flex-col">
      <span class="text-xl font-semibold text-gray-800 mb-1">Bill To:</span>
      <div>
        <label class="label">Name</label>
        <input v-model="form.clientName" class="input" placeholder="Client Name" />
      </div>
      <div>
        <label class="label">Email</label>
        <input v-model="form.clientEmail" class="input" placeholder="Client Email" />
      </div>
      <div class="md:col-span-2">
        <label class="label">Address</label>
        <input v-model="form.clientAddress" class="input" placeholder="Client Address" />
      </div>
    </div>
     </div>


    <!-- Invoice Info -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="label">Invoice #</label>
        <input v-model="form.invoiceNumber" class="input" placeholder="INV-001" />
      </div>
      <div>
        <label class="label">Invoice Date</label>
        <input v-model="form.date" type="date" class="input" />
      </div>
      <div>
        <label class="label">Due Date</label>
        <input v-model="form.dueDate" type="date" class="input" />
      </div>
    </div>

    <!-- Line Items -->
    <div>
      <label class="label">Line Items</label>
      <div v-for="(item, index) in form.items" :key="index" class="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
        <input v-model="item.description" class="input" placeholder="Description" />
        <input v-model.number="item.quantity" type="number" class="input" placeholder="Qty" />
        <input v-model.number="item.rate" type="number" class="input" placeholder="Rate" />
        <input :value="item.quantity * item.rate" disabled class="input bg-gray-100" placeholder="Total" />
      </div>
      <button type="button" @click="addItem" class="text-blue-600 hover:underline text-sm mt-1">+ Add item</button>
    </div>

    <!-- Notes -->
    <div>
      <label class="label">Notes</label>
      <textarea v-model="form.notes" class="input" rows="3" placeholder="Anything else to add?"></textarea>
    </div>

    <!-- Terms -->
    <div>
      <label class="label">Terms & Conditions</label>
      <textarea v-model="form.terms" class="input" rows="3" placeholder="Payment due within 30 days..."></textarea>
    </div>

    <!-- Submit -->
    <!-- <div class="text-right">
      <button type="submit" class="btn">Generate Invoice</button>
    </div> -->
  </form>
</template>

<script setup>
import { reactive, defineEmits, watchEffect, computed } from 'vue'

const emit = defineEmits(['generateInvoice'])

const form = reactive({
  myName: '',
  myEmail: '',
  myAddress: '',
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  invoiceNumber: '',
  date: '',
  dueDate: '',
  items: [
    { description: '', quantity: 1, rate: 0 }
  ],
  notes: '',
  terms: '',
})


const addItem = () => {
  form.items.push({ description: '', quantity: 1, rate: 0 })
}

const submit = () => {
  emit('generateInvoice', { ...form })
}

const totalAmount = computed(() =>
  form.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
)

watchEffect(() => {
  // Deconstruct form into plain object to avoid emitting reactive refs
  const data = {
    myName: form.myName,
    myEmail: form.myEmail,
    myAddress: form.myAddress,
    clientName: form.clientName,
    clientEmail: form.clientEmail,
    clientAddress: form.clientAddress,
    invoiceNumber: form.invoiceNumber,
    date: form.date,
    dueDate: form.dueDate,
    items: form.items.map(item => ({ ...item })), // clone items
    notes: form.notes,
    terms: form.terms,
    totalAmount: totalAmount.value
  }

  emit('generateInvoice', data)
})



</script>

<style scoped>
.label {
  @apply block text-sm font-medium text-gray-600 mb-1;
}
.input {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4;
}
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200;
}
</style>
