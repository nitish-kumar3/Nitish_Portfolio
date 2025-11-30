import React, { useState } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils/utils";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const loginAdmin = async () => {
    try {
      const resp = await fetch(`${BACKEND_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await resp.json();
      if (!resp.ok) return toast.error(data.message);

      localStorage.setItem("admin-token", data.token);
      toast.success("Welcome Admin!");

      window.location.href = "/admin";
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-xl w-96">
        <h1 className="text-2xl font-bold mb-4 font-display">Admin Login</h1>
        <input
          className="w-full px-3 py-2 border rounded mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 border rounded mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={loginAdmin}
          className="w-full bg-green-700 text-white py-2 rounded cursor-pointer hover:bg-green-800 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
