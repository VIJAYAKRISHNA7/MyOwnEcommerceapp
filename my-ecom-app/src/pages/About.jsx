import React from "react";

export default function About(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[var(--accent)] mb-4">About ArtifyGallery</h1>
      <p className="text-gray-700 mb-4">ArtifyGallery celebrates the traditional Tanjore craft — gold leaf, raised gesso, and rich pigments. Our artisan partners bring centuries of technique to modern homes.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="font-semibold mb-2">Our Craft</h4>
          <p className="text-gray-600">Every painting is handcrafted by skilled artisans, using traditional materials and meticulous techniques.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="font-semibold mb-2">Our Promise</h4>
          <p className="text-gray-600">Authenticity, quality, and secure shipping. Each piece includes a certificate of authenticity for collectors.</p>
        </div>
      </div>
    </div>
  );
}
