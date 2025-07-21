import { useState } from "react";
import axios from "axios";
import "./App.css"; // We'll add styles here

function App() {
  const [form, setForm] = useState({ name: "", email: "", className: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);
      setStatus(res.data.message);
    } catch (err) {
      setStatus("Error submitting form");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🎓 DETZ Student Registration.</h2>
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
          <input
            name="className"
            placeholder="Class Name"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}

export default App;
