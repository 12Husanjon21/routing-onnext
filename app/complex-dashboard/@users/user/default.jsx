"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex-1 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Users Page</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300"
          >
            <Link
              className="text-lg font-medium text-blue-600 hover:underline"
              href={`/complex-dashboard/user/${user.id}`}
            >
              <p>{user.name.firstname}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
