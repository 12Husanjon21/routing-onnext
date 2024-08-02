"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function UserPage({ params }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
        if (!res.ok) {
          throw new Error("User not found");
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/404");
      }
    }
    fetchData();
  }, [params.id, router]);

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        className="inline-block mb-4 text-blue-600 hover:text-blue-800 font-medium underline hover:no-underline transition-colors duration-300"
        href="/complex-dashboard"
      >
        &larr; Back to Products
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Image
          style={{ margin: "1rem" }}
          src={"/image1.svg"}
          alt="image of person"
          width={100}
          height={100}
        />
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">First Name:</span>
          {user.name.firstname}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Last Name:</span> {user.name.lastname}
        </p>
      </div>
    </div>
  );
}
