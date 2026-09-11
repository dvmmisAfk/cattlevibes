import { siteConfig } from "@/data/site";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  location?: string;
  role?: string;
  product?: string;
  message?: string;
}

function line(label: string, value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return `${label}: ${trimmed}`;
}

export function buildEnquiryWhatsAppMessage(data: EnquiryPayload) {
  const header = ["CattleVibes Product Enquiry", ""];
  const fields = [
    line("Name", data.name),
    line("Phone", data.phone),
    line("Email", data.email),
    line("Company / Farm", data.company),
    line("Role", data.role),
    line("Location", data.location),
    line("Product / Dossier", data.product),
  ].filter(Boolean);
  const message = data.message?.trim();
  return [
    ...header,
    ...fields,
    "",
    "Message / Requirement:",
    message || "Please contact me about CattleVibes products.",
  ].join("\n");
}

export function getWhatsAppChatUrl(text?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
