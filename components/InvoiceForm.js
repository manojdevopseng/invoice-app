"use client"
import { useState } from 'react';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    company: {
      gstin: '07NFUPS1411B1Z9',
      name: 'EVERWIN TOOLS',
      address: 'Extra 30/23, IInd Floor, Block-30 Extra Trilok Puri, Delhi-110091',
      mobile: '9716966506',
      email: 'everwintools2020@gmail.com'
    },
    buyer: {
      name: '',
      address: '',
      gstin: '',
      pan: ''
    },
    invoiceNumber: 251,
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    grNo: 'Verbal',
    vehicleNo: '',
    transport: 'By Hand',
    state: 'Delhi',
    statePin: '',
    placeOfSupply: '',
    items: [],
    bankDetails: {
      bank: 'CANARA BANK',
      branch: 'Mayur Vihar Phase-1, Delhi-110091',
      accountNumber: '2801201000725',
      ifsc: 'CNRB0002801',
      accountType: 'Current Account'
    },
    terms: {
      jurisdiction: 'All disputes Subject to Delhi Jurisdiction Only.',
      noReturn: 'Goods once sold will not be taken back only Exchanged.',
      interest: 'Interest @ 24% will be charged, if the bill is not paid on presentation.'
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (response.ok) {
      alert('Invoice created successfully');
    } else {
      alert('Error creating invoice');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Render form fields for company, buyer, invoice details, items, etc. */}
      {/* Example: */}
      <div>
        <label htmlFor="invoiceNumber">Invoice Number</label>
        <input
          id="invoiceNumber"
          name="invoiceNumber"
          type="number"
          value={formData.invoiceNumber}
          onChange={handleInputChange}
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Create Invoice</button>
    </form>
  );
};

export default InvoiceForm;
