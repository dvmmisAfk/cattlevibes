export const siteConfig = {
  name: "Cattle Vibes Healthcare Pvt. Ltd.",
  shortName: "Cattlevibes",
  tagline: "Complete Animal Healthcare Solutions",
  subtitle: "Innovative Veterinary Medicines & Nutritional Supplement",
  description:
    "Delivering premium veterinary medicines and nutritional supplements to enhance livestock health, productivity, and agricultural sustainability.",
  phone: "+91 98765 43210",
  email: "info@cattlevibes.com",
  address: "India",
  urls: {
    home: "/",
    about: "/about",
    solutions: "/solutions",
    products: "/products",
    resources: "/resources",
    contact: "/contact",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const productDropdownLinks = [
  { label: "Veterinary Medicines", href: "/products?category=Veterinary+Medicines" },
  { label: "Nutritional Supplements", href: "/products?category=Nutritional+Supplements" },
  { label: "Digestive & Liver Health", href: "/products?category=Digestive+%26+Liver+Health" },
  { label: "Parasite Control", href: "/products?category=Parasite+Control" },
  { label: "Calcium & Mineral Support", href: "/products?category=Calcium+%26+Mineral+Support" },
  { label: "Milk & Productivity", href: "/products?category=Milk+%26+Productivity" },
];

export const resourceDropdownLinks = [
  { label: "Product Catalogue", href: "/resources" },
  { label: "Product Information", href: "/resources" },
  { label: "FAQs", href: "/resources" },
];



export const solutions = [
  {
    id: "veterinary-medicines",
    number: "01",
    title: "Veterinary Medicines",
    description:
      "Professional-grade veterinary medicines for comprehensive livestock health management.",
    href: "/solutions#veterinary-medicines",
  },
  {
    id: "animal-nutrition",
    number: "02",
    title: "Animal Nutrition",
    description:
      "Nutritional supplements formulated to support optimal growth and productivity.",
    href: "/solutions#animal-nutrition",
  },
  {
    id: "digestive-liver",
    number: "03",
    title: "Digestive & Liver Health",
    description:
      "Hepatoprotective and rumen conditioning solutions for digestive wellness.",
    href: "/solutions#digestive-liver",
  },
  {
    id: "reproductive",
    number: "04",
    title: "Reproductive & Uterine Care",
    description:
      "Veterinary solutions for reproductive health and uterine care in dairy animals.",
    href: "/solutions#reproductive",
  },
  {
    id: "parasite-control",
    number: "05",
    title: "Parasite Control",
    description:
      "Anthelmintic and flukicide formulations for effective parasite management.",
    href: "/solutions#parasite-control",
  },
  {
    id: "calcium-milk",
    number: "06",
    title: "Calcium & Milk Support",
    description:
      "Calcium and mineral supplements to support milk productivity and metabolic health.",
    href: "/solutions#calcium-milk",
  },
];

export const solutionSections = [
  {
    id: "veterinary-medicines",
    title: "VETERINARY MEDICINES",
    description:
      "Our veterinary medicine range includes antibiotics, anti-inflammatory injections, and specialized formulations for professional livestock healthcare under veterinary guidance.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80",
    products: ["CATTLESPAS", "PYROVIBE Injection", "MEGLUVIBE", "CATTLE PHOS", "CATTLE-CEF", "CATTLECEF-SB"],
  },
  {
    id: "animal-nutrition",
    title: "ANIMAL NUTRITION",
    description:
      "Complete vitamin and mineral supplements designed to meet the nutritional requirements of dairy and farm animals for improved productivity and wellbeing.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    products: ["CATTLEMIN"],
  },
  {
    id: "digestive-liver",
    title: "DIGESTIVE & LIVER HEALTH",
    description:
      "Hepatoprotective tonics and rumen conditioning formulations to support liver function, digestive health, and feed utilization in ruminants.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    products: ["LIVER-OK", "LIVER-OK Injection", "RUMI-OK Powder", "RUMI-OK Bolus"],
  },
  {
    id: "reproductive",
    title: "REPRODUCTIVE & UTERINE CARE",
    description:
      "Veterinary medicines formulated for reproductive health management and uterine care in cattle and buffalo.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=80",
    products: ["UTROVIBE", "CATTLESPAS"],
  },
  {
    id: "parasite-control",
    title: "PARASITE CONTROL",
    description:
      "Broad-spectrum anthelmintics and flukicides for internal parasite and liver fluke control in livestock.",
    image: "https://images.unsplash.com/photo-1574943320210-5538b2583fcb?w=1200&q=80",
    products: ["FENDIVIBE PLUS", "FLUKEVIBE DS", "WORMS-OK PLUS"],
  },
  {
    id: "calcium-milk",
    title: "CALCIUM & MILK SUPPORT",
    description:
      "Calcium and mineral supplements in liquid and gel forms to support post-calving recovery and milk productivity in dairy animals.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85-7742?w=1200&q=80",
    products: ["CATTLESTAR", "CATTLESTAR-DS", "CATTLESTAR GOLD", "CATTLESTAR GEL", "CATTLESTAR ADVANCE GEL"],
  },
];

export const animalCategories = [
  { name: "Cattle", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80" },
  { name: "Buffalo", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80" },
  { name: "Goat", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80" },
  { name: "Sheep", image: "https://images.unsplash.com/photo-1484558830667-5e7daf3f3e6b?w=400&q=80" },
  { name: "Calf", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80" },
];

export const faqItems = [
  {
    question: "How can I find a specific Cattlevibes product?",
    answer:
      "Browse our Products page where you can search by name, filter by category, formulation, animal type, or health concern. Each product has a dedicated detail page with brochure-derived information.",
  },
  {
    question: "Where can I download the product catalogue?",
    answer:
      "Visit our Resources page to download the complete product catalogue. If the catalogue is not yet available for download, please contact us directly for a copy.",
  },
  {
    question: "How do I enquire about a product?",
    answer:
      "Use the Contact page to submit a product enquiry form, or click 'Enquire About This Product' on any product detail page. Our team will respond to your enquiry promptly.",
  },
  {
    question: "How can I become a distributor?",
    answer:
      "For distribution enquiries, please contact us via the Contact page with your company details and location. Our sales team will provide information about distribution opportunities.",
  },
  {
    question: "Where can I find dosage and product information?",
    answer:
      "Detailed product information including composition, indications, dosage, and presentation is available on each product detail page, sourced from our official product catalogue. Always consult a veterinarian before use.",
  },
];

export const images = {
  logo: "/images/cattlevibes-mark.png",
  logoWhite: "/images/cattlevibes-mark-white.png",
  heroImage: "/images/hero-pastoral.jpg",
  heroVideo: "/videos/hero-upscaled.mp4",
  heroVideoWebm: "/videos/hero.webm",
  heroAudio: "/audio/hero.mp3",
  heroPoster: "/images/indian-cow-shelter-ground.jpg",
  heroPosterMobile: "/images/indian-cow-shelter-ground.jpg",
  heroPosterFallback:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=85",
  aboutHero:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&q=80",
  farmWide:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80",
  farmAtmospheric:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80",
  contactHero:
    "https://images.unsplash.com/photo-1574943320210-5538b2583fcb?w=1600&q=80",
};



export const homeFaqItems = [
  {
    question: "What kind of animals are Cattlevibes products intended for?",
    answer:
      "Our range is formulated primarily for cattle and buffalo, with select products suitable for goats and sheep. Applicable animals are listed on each product's detail page.",
  },
  {
    question: "What types of animal-health needs does Cattlevibes cover?",
    answer:
      "Digestion and liver health, nutrition and productivity, reproductive and uterine care, pain and inflammation, and infection and parasite control.",
  },
  {
    question: "Are Cattlevibes products medicines or feed supplements?",
    answer:
      "Both. Our portfolio includes veterinary medicines for specific health conditions and nutritional supplements for everyday feed support — each product page states its category.",
  },
  {
    question: "Where can I find dosage information?",
    answer:
      "Dosage and administration details are provided on each product's detail page, sourced from the official product catalogue. Always follow veterinary guidance.",
  },
  {
    question: "Are withdrawal periods the same for every product?",
    answer:
      "No. Withdrawal periods vary by product and are listed on the relevant product detail page where applicable.",
  },
  {
    question: "Can I get information about a specific product?",
    answer:
      "Yes — every product has a dedicated detail page. You can also reach out through our Contact page for further information.",
  },
  {
    question: "Are these products for human use?",
    answer: "No. Cattlevibes products are formulated exclusively for veterinary and livestock use.",
  },
];
