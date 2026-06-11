"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");
    const [token, setToken] = useState("");
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!token) {
    alert("Please verify you are human.");
    return;
    }

    try {
      console.log("CONTACT FORM V2");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token,
        
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Thank you! Your message has been sent successfully.");
        setStatusType("success");

        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          budget: "",
          message: "",
        });
      } else {
          setStatus(
            data.error || "Something went wrong. Please try again."
          );
        setStatusType("error");
      }
    } catch (error) {
      setStatus(
        "Unable to send message. Please try again later."
      );
      setStatusType("error");
     
    }

    setIsSubmitting(false);
  };

  return (
    <div className="rounded-md bg-slate-950 p-8 text-white shadow-2xl">

      <h2 className="text-2xl font-bold">Start a conversation</h2>

      <p className="mt-3 text-slate-300">
        Have a project in mind? Looking for a freelance web developer?
        Fill in the form below and I'll get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
          "
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
          "
        />

        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
            bg-slate-950
          "
        >
          <option value="">
            Select Project Type
          </option>

          <option value="Website Design">
            Website Design
          </option>

          <option value="Website Development">
            Website Development
          </option>

          <option value="WordPress">
            WordPress
          </option>

          <option value="Next.js">
            Next.js
          </option>

          <option value="Magento">
            Magento
          </option>

          <option value="SEO">
            SEO
          </option>
        </select>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
            bg-slate-950
          "
        >
          <option value="">
            Select Budget
          </option>

          <option value="£500 - £1,000">
            £500 - £1,000
          </option>

          <option value="£1,000 - £2,500">
            £1,000 - £2,500
          </option>

          <option value="£2,500 - £5,000">
            £2,500 - £5,000
          </option>

          <option value="£5,000+">
            £5,000+
          </option>
        </select>

        <textarea
          name="message"
          rows="6"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-4
          "
        />

        <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onSuccess={(token) => setToken(token)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full 
            rounded-md 
            bg-gradient-to-r from-pink-500 to-orange-400 
            px-6 
            py-3 text-sm 
            font-bold 
            text-white 
            transition hover:scale-[1.02]
          "
        >
          {isSubmitting
            ? "Sending..."
            : "Send Message"}
        </button>

        {status && (
        <div
          className={`
            mt-4 rounded-xl px-4 py-3 text-sm
            ${
              statusType === "success"
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border border-red-500/30 bg-red-500/10 text-red-400"
            }
          `}
        >
          {status}
        </div>
      )}

      </form>

    </div>
  );
}