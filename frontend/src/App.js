import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", className: "" });
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);
      setStatus(res.data.message);
      setIsSubmitted(true);
    } catch (err) {
      setStatus("Error submitting form");
    }
  };

  return (
    <div className="container">
      <div className="card">
        {isSubmitted ? (
          <div className="thank-you">
            <h2>Thank You for Registering!</h2>
            <p>
              We’ve received your registration. A confirmation email has been
              sent to <strong>{form.email}</strong>
            </p>
            <p>Check your inbox for your registration details.</p>
          </div>
        ) : (
          <>
            <h2>🎓 Student Registration</h2>
            <h3>Join DETZ Global Education Platform</h3>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email Address"
                type="email"
                onChange={handleChange}
                required
              />
              <select name="className" onChange={handleChange} required>
                <option value="">Select Class</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Data Science">Data Science</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
              </select>
              <button type="submit">Register Now</button>
              
              <p className="text-center mt-4">DETZ Global Pvt Ltd</p>

            </form>
            {status && <p className="status">{status}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
