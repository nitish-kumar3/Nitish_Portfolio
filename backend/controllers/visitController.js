import Visit from "../model/Visit.js";

export const recordVisit = async (req, res) => {
  try {
    const ip = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const ua = req.get("User-Agent") || "";
    const path = req.body.path || req.query.path || req.headers.referer || "/";

    const v = new Visit({ path, ip, ua });
    await v.save();
    res.json({ success: true });
  } catch (err) {
    console.error("Visit record failed", err);
    res.status(500).json({ message: "Failed to record visit" });
  }
};
