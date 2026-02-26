import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Use the API URL from environment variables, fallback to local default if not set
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";
      const response = await axios.post(apiUrl, formData);
      console.log("Message sent:", response.data);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0f25] via-[#0d1b3b] to-[#132c5d] text-white px-8 py-24 relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-pulse -z-10" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-3">
          Contact Me
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative z-10"
        >
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmuavia072@gmail.com" target="_blank" rel="noopener noreferrer" className="group block bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all cursor-pointer relative z-50">
            <Mail className="text-cyan-400 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-blue-300 mb-1 group-hover:text-cyan-400 transition-colors">Email</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">ahmedmuavia072@gmail.com</p>
          </a>

          <a href="https://wa.me/923041275072" target="_blank" rel="noopener noreferrer" className="group block bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all cursor-pointer relative z-50">
            <Phone className="text-cyan-400 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-blue-300 mb-1 group-hover:text-cyan-400 transition-colors">Phone</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">03041275072</p>
          </a>

          <a href="https://www.google.com/maps/search/?api=1&query=Rahim+Yar+Khan+Pakistan" target="_blank" rel="noopener noreferrer" className="group block bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all cursor-pointer relative z-50">
            <MapPin className="text-cyan-400 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-blue-300 mb-1 group-hover:text-cyan-400 transition-colors">Location</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">ryk,Pakistan</p>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg space-y-5 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 mt-4">
              <CheckCircle2 className="w-5 h-5" />
              <span>Message sent successfully!</span>
            </div>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
