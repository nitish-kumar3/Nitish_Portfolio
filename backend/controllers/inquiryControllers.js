// import nodemailer from "nodemailer";
// import Inquiry from "../model/Inquiry.js";

// export const sendInquiry = async (req, res) => {
//   try {
//     const { serviceId, name, email, message } = req.body;

//     // Save inquiry in DB
//     await Inquiry.create({ serviceId, name, email, message });

//     // Email setup
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Inquiry About ${serviceId}`,
//       text: `
// New Portfolio Inquiry

// Name: ${name}
// Email: ${email}
// Service: ${serviceId}

// Message:
// ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.json({ success: true, message: "Inquiry sent successfully" });
//   } catch (err) {
//     console.error("Inquiry error:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };






// // controllers/inquiryController.js
// import nodemailer from "nodemailer";
// import Inquiry from "../model/Inquiry.js";

// export const sendInquiry = async (req, res) => {
//   try {
//     const { serviceId, name, email, message } = req.body ?? {};

//     // validation
//     if (!serviceId || !name || !email || !message) {
//       return res.status(400).json({ success: false, message: "Missing required fields" });
//     }

//     // Save inquiry in DB
//     await Inquiry.create({ serviceId, name, email, message });

//     // Email setup (Gmail app password or sendgrid alternative)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail
//         pass: process.env.EMAIL_PASS, // app password
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,       // must be your verified/sending account
//       to: process.env.EMAIL_USER,         // deliver to yourself
//       replyTo: email,                     // user's email so you can reply directly
//       subject: `New Inquiry: ${serviceId} — ${name}`,
//       html: `
//         <h2>New Service Inquiry</h2>
//         <p><strong>Service:</strong> ${serviceId} (${serviceId})</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message.replace(/\n/g, "<br/>")}</p>
//         <hr/>
//         <p>Received: ${new Date().toLocaleString()}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.json({ success: true, message: "Inquiry sent successfully" });
//   } catch (err) {
//     console.error("Inquiry error:", err);
//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// };



// controllers/inquiryController.js
import nodemailer from "nodemailer";
import Inquiry from "../model/Inquiry.js";

export const sendInquiry = async (req, res) => {
  try {
    const { serviceId, name, email, message } = req.body ?? {};

    if (!serviceId || !name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Save to DB
    await Inquiry.create({ serviceId, name, email, message });

    // Prepare email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Service ID:</strong> ${serviceId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email BUT never block the response
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Email error:", error);
        return res.json({
          success: true,
          message: "Inquiry saved (email failed)",
        });
      }

      return res.json({
        success: true,
        message: "Inquiry sent successfully",
      });
    });
  } catch (err) {
    console.error("Inquiry error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
