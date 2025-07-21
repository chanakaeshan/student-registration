const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendConfirmationEmail = async (student) => {
  const mailOptions = {
    from: `"DETZ Global" <${process.env.GMAIL_USER}>`,
    to: student.email,
    subject: `Registration Confirmation - Student ID #${student.id}`,
    html: `
      <div style="font-family: Arial; border: 1px solid #ccc; padding: 20px;">
        <h2>🎓 Registration Successful!</h2>
        <p><strong>Student Name:</strong> ${student.name}</p>
        <p><strong>Registration ID:</strong> ${student.id}</p>
        <p><strong>Class Name:</strong> ${student.className}</p>
        <p>Thank you for registering with DETZ Global. We will contact you soon</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendConfirmationEmail;
