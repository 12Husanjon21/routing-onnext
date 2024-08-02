import Link from "next/link";
import React from "react";

export default async function Productpage() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="flex-1 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Products Page</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li
            key={p.id}
            className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300"
          >
            <Link
              className="text-lg font-medium text-blue-600 hover:underline"
              href={`/complex-dashboard/product/${p.id}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
