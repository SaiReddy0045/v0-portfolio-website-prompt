"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="glass-effect border border-primary/20 p-6 rounded-lg text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">8047206619</p>
          </div>

          <div className="glass-effect border border-secondary/20 p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">Andhra Pradesh, India</p>
          </div>

          <div className="glass-effect border border-primary/20 p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">Connect via phone</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-effect border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-primary/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-black border border-primary/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 bg-black border border-primary/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
