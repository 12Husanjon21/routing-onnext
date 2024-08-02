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
    <div className="container mx-auto p-4">
      <Link
        className="inline-block mb-4 text-xl text-gray-800 hover:text-gray-400 font-medium transition-colors duration-300"
        href="/complex-dashboard"
      >
        &larr; Back to List
      </Link>
      <div className="bg-white shadow-md flex border-2 gap-6 border-gray-200 rounded-lg pt-6 pl-6 pr-6 ">
        <Image
          className="w-48 h-48"
          src={"/image1.svg"}
          alt="image of person"
          width={100}
          height={100}
        />
        <div>
          <p className="text-2xl font-bold text-gray-700 mb-1">
            <span className="font-medium">First name: </span>
            {user.name.firstname.charAt(0).toUpperCase() +
              user.name.firstname.slice(1)}
          </p>
          <p className="text-2xl font-bold text-gray-700">
            <span className="font-medium">Last name: </span>
            {user.name.lastname.charAt(0).toUpperCase() +
              user.name.lastname.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
