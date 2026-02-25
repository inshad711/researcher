"use client";

import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Contact2: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-slate-50 p-4 md:p-12 text-slate-900">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center gap-2">
        <div className="h-[2px] w-6 bg-blue-900"></div>
        <h2 className="text-xl font-bold text-blue-900">Contact Us</h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-xl border border-slate-100 bg-white">
        
        {/* Left Side: Form Section (White Background) */}
        <div className="flex-1 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-slate-900">
            We're Just a Message Away – <br /> 
            <span className="text-blue-900">Let's Talk</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {/* Name Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold mb-2 text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name*"
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-blue-900 transition-colors placeholder:text-slate-400 text-sm text-slate-900"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your E-mail Id*"
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-blue-900 transition-colors placeholder:text-slate-400 text-sm text-slate-900"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold mb-2 text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number*"
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-blue-900 transition-colors placeholder:text-slate-400 text-sm text-slate-900"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              {/* Industry Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold mb-2 text-slate-700">Industry</label>
                <div className="relative">
                  {/* Fixed Warning: Used defaultValue instead of selected on option */}
                  <select
                    defaultValue=""
                    className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-blue-900 transition-colors appearance-none cursor-pointer text-slate-500 text-sm"
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    required
                  >
                    <option value="" disabled>--Select Your Industry*--</option>
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group pt-2">
              <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
              <textarea
                rows={1}
                placeholder="Send Your Message*"
                className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-blue-900 transition-colors placeholder:text-slate-400 text-sm resize-none text-slate-900"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="group flex items-center gap-4 px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 font-bold shadow-lg shadow-blue-900/20"
              >
                <span>Submit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Info Section */}
        {/* <div className="w-full lg:w-[400px] relative min-h-[400px] flex flex-col justify-between p-8 md:p-12 text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: 'url("/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp")',
            }}
          >
            <div className="absolute inset-0 bg-black"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Have A Idea In Mind?</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-12">
              Reach out to us. We can make something awesome together.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Address</h4>
                <p className="font-semibold">India</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Email ID</h4>
                <p className="font-semibold break-all">pant.rashmi1971@gmail.com</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Phone Number</h4>
                <p className="font-semibold">+91 9979882420</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full lg:w-[400px] relative min-h-[400px] flex flex-col justify-between p-8 md:py-12 md:px-5 text-white overflow-hidden">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{ 
      backgroundImage: 'url("/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp")',
    }}
  >
    {/* Gradient Overlay: Adjust opacity (e.g., opacity-80) or colors as needed */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
  </div>

  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-4">Have An Idea In Mind?</h3>
    <p className="text-blue-100/80 text-sm leading-relaxed mb-12">
      Reach out to us. We can make something awesome together.
    </p>

    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Address</h4>
        <p className="font-semibold">India</p>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Email ID</h4>
        <p className="font-semibold break-all">pant.rashmi1971@gmail.com</p>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300/60 mb-1">Phone Number</h4>
        <p className="font-semibold">+91 9979882420</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Contact2;