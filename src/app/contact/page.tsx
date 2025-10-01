'use client'
import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Have questions? We would love to hear from you. Fill out the form below and we will get back to you shortly.
        </p>

        <form className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-black font-bold rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400">
          <p>Or reach out directly at:</p>
          <p className="mt-2 font-medium">support@musiccourses.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
