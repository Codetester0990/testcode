export default function handler(req, res) {
  const { q } = req.query;
  const mockData = [
    {
      name: "Target Store #0101 - Anytown Plaza",
      stock: "IN STOCK",
      address: "123 Main St, Anytown, CA, 90210",
      distance: 2.5,
      lat: 34.0522,
      lng: -118.2437
    },
    {
      name: "Target Store #0202 - Springfield Mall",
      stock: "LIMITED STOCK",
      address: "456 Oak Ave, Springfield, IL, 62704",
      distance: 350,
      lat: 39.7817,
      lng: -89.6501
    }
  ];

  const filtered = mockData.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase())
  );
  res.status(200).json({ stores: filtered });
}