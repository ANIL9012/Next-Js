"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Not authenticated");
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">
                Welcome, {user?.name}!
              </h2>
              <p className="text-gray-600">You are successfully logged in.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700">
                  Profile Information
                </h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Name:</span> {user?.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {user?.email}
                  </p>
                  <p>
                    <span className="font-medium">User ID:</span> {user?._id}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-700">Account Status</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Status:</span> Active
                  </p>
                  <p>
                    <span className="font-medium">Member since:</span>{" "}
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
