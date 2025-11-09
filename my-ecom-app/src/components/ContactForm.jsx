import React, { useState } from "react";

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [ok, setOk] = useState(null);

  async function submit(e){
    e.preventDefault();
    try{
      // For now this demo uses local alert. Later wire to backend / api.
      console.log('contact', form);
      setForm({ name:'', email:'', message:''});
      setOk(true);
    }catch(err){
      setOk(false);
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow max-w-xl">
      <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="w-full p-3 border rounded mb-3"/>
      <input required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Your email" className="w-full p-3 border rounded mb-3"/>
      <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" className="w-full p-3 border rounded mb-3"/>
      <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded">Send Message</button>
      {ok===true && <div className="mt-3 text-green-600">Message sent!</div>}
      {ok===false && <div className="mt-3 text-red-600">Failed to send.</div>}
    </form>
  );
}
