"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(
      "https://vinodsoba.co.uk/wp-json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);

      console.log("Logged in");
    } else {
      console.log("Error with token");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full p-6 border rounded-xl"
      >
        <h1 className="text-3xl mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}