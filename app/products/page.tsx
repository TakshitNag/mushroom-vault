"use client";

import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover mb-3 rounded"
            />

            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-sm text-gray-500 mt-2">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
