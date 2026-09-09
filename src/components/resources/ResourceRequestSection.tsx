"use client";

import { useState } from "react";
import { CheckCircle2, FileText, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Buttons";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

export function ResourceRequestSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("Veterinarian");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setOrganization("");
    setRole("Veterinarian");
    setEmail("");
    setPhone("");
    setProduct("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section
      id="dossier-request"
      className="bg-light-pebble/60 py-20 md:py-28 border-b border-border/70 scroll-mt-20"
      aria-labelledby="dossier-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* ─── Left Column (40%): Editorial Context ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2
              id="dossier-heading"
              className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-deep-navy leading-tight"
            >
              Need Detailed Product Information?
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-cadet-blue">
              Request product-specific information or supporting documentation from the CattleVibes technical and commercial desk.
            </p>

            <div className="mt-8 space-y-4 border-t border-border/80 pt-6">
              <div className="flex items-start gap-3.5">
                <FileText className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Technical Specifications
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Active compositions, indication notes, presentation details, and administration guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <ShieldCheck className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Verified Practitioners
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Documentation issued directly to certified veterinary professionals, livestock managers, and authorized distributors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Direct Commercial Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    For institutional tenders or urgent requirements: <span className="font-semibold text-deep-navy">{siteConfig.email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right Column (60%): Clean Editorial Form ─── */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-white p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center sm:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-deep-navy">
                    Dossier Request Received
                  </h3>
                  <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-cadet-blue">
                    Our commercial desk will review your requirement and dispatch the requested technical documentation to <span className="font-semibold text-deep-navy">{email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 inline-flex items-center gap-2 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange hover:underline cursor-pointer"
                  >
                    <span>Submit another request</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="req-name" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="req-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Mr. / Ms. Name"
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label htmlFor="req-org" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Organization / Farm Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="req-org"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Sunrise Dairy Farm / Clinic"
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Role */}
                    <div>
                      <label htmlFor="req-role" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Professional Role
                      </label>
                      <select
                        id="req-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="Veterinarian">Veterinarian / Practitioner</option>
                        <option value="Farm Operator">Dairy / Farm Operator</option>
                        <option value="Distributor">Veterinary Distributor / Stockist</option>
                        <option value="Institutional Buyer">Institutional / Cooperative Buyer</option>
                        <option value="Other">Other Healthcare Professional</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="req-email" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="req-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="doctor@clinic.com"
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label htmlFor="req-phone" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        id="req-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 00000 00000"
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    {/* Product or Resource */}
                    <div>
                      <label htmlFor="req-product" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                        Product / Dossier Focus
                      </label>
                      <select
                        id="req-product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full h-11 rounded-xl border border-border/80 bg-white px-3.5 text-sm text-deep-navy transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="">Complete Product Portfolio</option>
                        {products.map((p) => (
                          <option key={p.slug} value={p.name}>
                            {p.name} ({p.formulation})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="req-msg" className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5">
                      Specific Requirements / Questions <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      id="req-msg"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify therapeutic questions, required product specifications, or territory distribution interest..."
                      className="w-full resize-none rounded-xl border border-border/80 bg-white p-3.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center h-12"
                    >
                      Request Information
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
