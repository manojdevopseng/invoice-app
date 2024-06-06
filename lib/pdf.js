import PDFDocument from 'pdfkit';
import { writeFileSync } from 'fs';

export const generateInvoicePDF = (invoice) => {
  const doc = new PDFDocument();

  doc.fontSize(25).text('Invoice', { align: 'center' });
  doc.text(`Invoice Number: ${invoice.invoiceNumber}`, 100, 150);

  // Add more details from the invoice object

  doc.end();

  writeFileSync(`invoices/${invoice.invoiceNumber}.pdf`, doc);
};
