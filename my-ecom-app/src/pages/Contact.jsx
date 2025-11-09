import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[var(--accent)] mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have a custom request or question? Message us — we reply quickly.</p>
      <ContactForm />
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold">Visit Our Studio</h4>
        <p className="text-gray-600">Tanjore Art Studio, Chennai, Tamil Nadu</p>
        <iframe title="map" className="w-full h-64 mt-4 rounded" src="https://www.google.com/maps/embed?pb=!1m18" style={{border:0}}/>
      </div>
    </div>
  );
}
