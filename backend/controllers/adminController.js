import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  // read env here (not at module load)
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  const { email, password } = req.body;

  console.log("====== LOGIN DEBUG ======");
  console.log("ENV EMAIL:", ADMIN_EMAIL);
  console.log("ENV PASS:", ADMIN_PASSWORD);
  console.log("RECEIVED EMAIL:", email);
  console.log("RECEIVED PASS:", password);
  console.log("==========================");

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "10d" });
  res.json({ success: true, token });
};
