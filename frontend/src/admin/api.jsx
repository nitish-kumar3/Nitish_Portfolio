// // src/admin/api.js
// export const apiFetch = async (url, opts = {}) => {
//   const token = localStorage.getItem("admin-token");
//   const headers = {
//     "Content-Type": "application/json",
//     ...(opts.headers || {}),
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };
//   const res = await fetch(url, { ...opts, headers });
//   if (!res.ok) {
//     const txt = await res.text().catch(() => null);
//     const json = txt ? (() => { try { return JSON.parse(txt); } catch { return null; } })() : null;
//     const err = json?.message || txt || res.statusText || "Request failed";
//     const error = new Error(err);
//     error.status = res.status;
//     throw error;
//   }
//   // try parse json
//   const text = await res.text();
//   try { return JSON.parse(text || "{}"); } catch { return text; }
// };


// src/admin/api.js
export const apiFetch = async (url, opts = {}) => {
  const token = localStorage.getItem("admin-token");
  const headers = {
    ...(opts.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(url, { ...opts, headers });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    let msg = text || response.statusText || "Request failed";
    try {
      const parsed = JSON.parse(text || "{}");
      msg = parsed?.message || msg;
    } catch {}
    const err = new Error(msg);
    err.status = response.status;
    throw err;
  }

  const txt = await response.text();
  try {
    return JSON.parse(txt || "{}");
  } catch {
    return txt;
  }
};
