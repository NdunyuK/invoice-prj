import html2pdf from 'html2pdf.js'

export function generatePDF(data) {
  const totalAmount = data.items.reduce((acc, item) => acc + item.quantity * item.rate, 0)
  
  const itemsHtml = data.items.map(item => `
    <div class="grid grid-cols-4 gap-4 py-2 text-sm text-gray-700">
      <div>${item.description}</div>
      <div class="text-center">${item.quantity}</div>
      <div class="text-center">$${item.rate.toFixed(2)}</div>
      <div class="text-right">$${(item.quantity * item.rate).toFixed(2)}</div>
    </div>
  `).join('')
  const element = document.createElement('div')
  element.innerHTML = 
  `<div class="bg-white p-8 shadow-md rounded-md font-sans max-w-3xl mx-auto">
  <div class="flex justify-between items-start mb-8">
    <div>
      <p class="text-2xl font-medium font-bold text-gray-800">${ data.myName }</p>

    </div>
    <div class=" text-right ">
      <h1 class="text-2xl font-medium font-bold text-gray-800">Invoice #</h1>
      <p class="text-md text-gray-700 pb-4">${ data.invoiceNumber }</p>
      <p class="text-md text-gray-500">${ data.myAddress }</p>
      <p class="text-md text-gray-500">${ data.myEmail }</p>
    </div>
    
  </div>
  <div class="flex flex-row justify-between">
    <div class="mb-6" >
      <h2 class="text-lg font-semibold text-gray-700">Billed To:</h2>
      <p class="text-lg font-semibold text-gray-700">${ data.clientName }</p>
      <p class="text-gray-500 text-md">${ data.clientAddress }</p>
      <p class="text-gray-500 text-md">${ data.clientEmail }</p>
    </div>
    <div class="mb-6">
      <div class="flex flex-row justify-end items-center">
        <h2 class="text-lg font-semibold text-gray-700">Invoice Date: </h2>
        <span class="text-gray-500 text-md pl-4">${ data.date }</span>
      </div>
      <div class="flex flex-row justify-end items-center">
        <h2 class="text-lg font-semibold text-gray-700">Due Date: </h2>
        <span class="text-gray-500 text-md pl-4">${ data.dueDate }</span>
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

${itemsHtml}
</div>

  <div class="flex justify-end items-center text-lg font-semibold">
    <span class="mr-4">Total Amount:</span>
    <span>$${ totalAmount }</span>
  </div>

  <div class="mt-6">
    <h3 class="text-md font-semibold text-gray-700">Notes</h3>
    <p class="text-md text-gray-600">${ data.notes }</p>
  </div>

  <div class="mt-4">
    <h3 class="text-md font-semibold text-gray-700">Terms & Conditions</h3>
    <p class="text-md text-gray-600">${ data.terms }</p>
  </div>

  <div class="mt-6 text-md text-gray-500">
    Thank you for your business. Please make payment within the stated terms.
  </div>

</div>`


  html2pdf().from(element).save('invoice.pdf')
}