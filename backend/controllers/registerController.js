const db = require("../firebase");
const sendEmail = require("../utils/mailer");
const { v4: uuidv4 } = require("uuid");

exports.registerStudent = async (req, res) => {
  const { name, email, className } = req.body;

  if (!name || !email || !className) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const id = uuidv4().slice(0, 8);
    const student = { id, name, email, className };
    await db.collection("students").doc(id).set(student);
    await sendEmail(student);
    res.status(200).json({ message: "Registered successfully!", id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
};
