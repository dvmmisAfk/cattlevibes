import { siteConfig } from "@/data/site";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  company?: string;
  location?: string;
  product?: string;
  message?: string;
}

function line(label: string, value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return `${label}: —`;
  return `${label}: ${trimmed}`;
}

export function buildEnquiryWhatsAppMessage(data: EnquiryPayload) {
  return [
    "CattleVibes Product Enquiry",
    "",
    line("Name", data.name),
    line("Phone", data.phone),
    line("Email", data.email),
    line("Company / Farm", data.company),
    line("Location", data.location),
    line("Product / Dossier", data.product),
    "",
    "Message / Requirement:",
    data.message?.trim() || "—",
  ].join("\n");
}

export function getWhatsAppChatUrl(text?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
