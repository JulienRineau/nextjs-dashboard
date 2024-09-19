"use client";

import React, { useState } from 'react';
import { Button } from '@/app/ui/button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          to: 'julien@zeroshotdata.com'
        }),
      });
      // Reset form fields after submission
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (error) {
      // ... error handling
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 sm:py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 text-sm sm:text-base"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-3 py-2 sm:py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 text-sm sm:text-base"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm sm:text-base font-medium text-gray-700">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 block w-full px-3 py-2 sm:py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 text-sm sm:text-base"
            placeholder="Your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}  // Increased from 4 to 6
            required
            className="mt-1 block w-full px-3 py-2 sm:py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 text-sm sm:text-base"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
}
