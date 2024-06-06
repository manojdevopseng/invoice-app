import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('invoiceApp');

  if (req.method === 'POST') {
    const invoice = req.body;
    const collection = db.collection('invoices');
    await collection.insertOne(invoice);
    res.status(201).json({ message: 'Invoice created' });
  } else if (req.method === 'GET') {
    const collection = db.collection('invoices');
    const invoices = await collection.find({}).toArray();
    res.status(200).json(invoices);
  }
}
