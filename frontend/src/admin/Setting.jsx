import React, { useState } from "react";
import { motion } from "framer-motion";
import { apiFetch } from "./api";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils/utils";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState({ old: "", new: "" });

  const updateProfile = async () => {
    try {
      await apiFetch(`${BACKEND_URL}/api/settings/profile`, {
        method: "PUT",
        body: JSON.stringify(profile),
      });
      toast.success("Profile Updated");
    } catch {
      toast.error("Failed");
    }
  };

  const updatePassword = async () => {
    try {
      await apiFetch(`${BACKEND_URL}/api/settings/password`, {
        method: "PUT",
        body: JSON.stringify(password),
      });
      toast.success("Password changed");
    } catch {
      toast.error("Wrong Old Password");
    }
  };

  return (
    <div className="p-8 bg-green-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-green-900 dark:text-yellow-300">
        Settings
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {/* Profile */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h2 className="font-semibold text-xl mb-4">Profile</h2>

          <label className="text-sm">Name</label>
          <input
            className="input"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <label className="text-sm mt-3">Email</label>
          <input
            className="input"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />

          <label className="text-sm mt-3">Bio</label>
          <textarea
            className="input h-20"
            value={profile.bio}
            onChange={(e) =>
              setProfile({ ...profile, bio: e.target.value })
            }
          />

          <button
            onClick={updateProfile}
            className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md"
          >
            Save Changes
          </button>
        </motion.div>

        {/* Password */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h2 className="font-semibold text-xl mb-4">Change Password</h2>

          <label className="text-sm">Old Password</label>
          <input
            type="password"
            className="input"
            value={password.old}
            onChange={(e) =>
              setPassword({ ...password, old: e.target.value })
            }
          />

          <label className="text-sm mt-3">New Password</label>
          <input
            type="password"
            className="input"
            value={password.new}
            onChange={(e) =>
              setPassword({ ...password, new: e.target.value })
            }
          />

          <button
            onClick={updatePassword}
            className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md"
          >
            Change Password
          </button>
        </motion.div>

        {/* Theme Switch */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow md:col-span-2"
        >
          <h2 className="font-semibold text-xl mb-4">Appearance</h2>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="text-gray-800 dark:text-gray-200">
              Enable Dark Mode
            </span>
          </label>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
