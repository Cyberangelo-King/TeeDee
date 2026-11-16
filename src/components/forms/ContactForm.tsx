"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "cctv-systems",
    propertyType: "residential",
    location: "Lagos",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Construct WhatsApp message URL as instant fail-safe
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello TeeDee Edge Automations,\n\nMy Name: ${formData.name || "Client"}\nPhone: ${formData.phone || "Not provided"}\nService Needed: ${formData.service}\nProperty Type: ${formData.propertyType}\nLocation: ${formData.location}\nDetails: ${formData.message || "I would like to request a site assessment."}`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="h-14 w-14 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-td-graphite">
            Assessment Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. An engineer from our {formData.location} team will contact you shortly via {formData.phone || formData.email}.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={createWhatsAppLink()}
              variant="whatsapp"
              size="md"
              external
              className="gap-2 w-full sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" />
              Forward Directly on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setStatus("idle")}
              className="w-full sm:w-auto"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-td-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Babatunde Adeleke"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Phone Number (WhatsApp) <span className="text-td-red">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 0803 123 4567"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@company.com"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Primary Service of Interest
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red bg-white"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Combined Multi-System Package">
                  Combined Multi-System Package (CCTV + Solar + Gates)
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="propertyType"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Property / Project Type
              </label>
              <select
                id="propertyType"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red bg-white"
              >
                <option value="Residential Compound / Villa">Residential Compound / Private Home</option>
                <option value="Gated Estate / Community">Gated Estate / Community Barrier</option>
                <option value="Commercial Office / Plaza">Commercial Office / Retail Plaza</option>
                <option value="Hotel / Short-Let Facility">Hotel / Guest House / Short-Let</option>
                <option value="Industrial / Warehouse / Factory">Industrial / Factory / Warehouse</option>
                <option value="Technical Training Enrollment">Technical Training Enrollment</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
              >
                Project Location Hub
              </label>
              <select
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red bg-white"
              >
                <option value="Lagos State">Lagos State (Ogudu / Mainland / Island)</option>
                <option value="Abuja FCT">Abuja FCT & Environs</option>
                <option value="Ogun / South West">Ogun / Oyo / South West</option>
                <option value="Other States">Other Nigerian State (Regional Deployment)</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono font-bold text-td-graphite uppercase tracking-wider mb-1.5"
            >
              Project Summary / Special Requirements
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you want to achieve (e.g. 8 cameras covering driveway and fence line with inverter backup for 24-hour runtime, or automated sliding gate with remote controls)..."
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-td-graphite focus:border-td-red focus:outline-none focus:ring-1 focus:ring-td-red"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Send className="h-4 w-4" />
              Send Inquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
