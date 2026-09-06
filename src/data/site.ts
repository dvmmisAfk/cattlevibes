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
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Products", href: "/products" },
  { label: "Resources", href: "/resources" },
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

export const heroFeatures = [
  { label: "Digestion", icon: "digestion" },
  { label: "Nutrition", icon: "nutrition" },
  { label: "Reproductive Health", icon: "reproductive" },
  { label: "Pain & Inflammation", icon: "pain" },
  { label: "Parasite Control", icon: "parasite" },
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
    products: ["FENDIVIBE PLUS", "FLUKEVIBE DS", "WORMS-OK", "WORMS-OK PLUS"],
  },
  {
    id: "calcium-milk",
    title: "CALCIUM & MILK SUPPORT",
    description:
      "Calcium and mineral supplements in liquid and gel forms to support post-calving recovery and milk productivity in dairy animals.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85-7742?w=1200&q=80",
    products: ["CATTLESTAR", "CATTLESTAR-DS", "CATTLESTAR GEL", "CATTLESTAR ADVANCE GEL"],
  },
];

export const animalCategories = [
  { name: "Cattle", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80" },
  { name: "Buffalo", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80" },
  { name: "Goat", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80" },
  { name: "Sheep", image: "https://images.unsplash.com/photo-1484558830667-5e7daf3f3e6b?w=400&q=80" },
  { name: "Horse", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?w=400&q=80" },
  { name: "Calf", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80" },
  { name: "Pig", image: "https://images.unsplash.com/photo-1598439210620-c8500d0f1811?w=400&q=80" },
  { name: "Poultry", image: "https://images.unsplash.com/photo-1548550020-6b7c384ea1f3?w=400&q=80" },
  { name: "Aqua", image: "https://images.unsplash.com/photo-1544551763-77a840bbdeea?w=400&q=80" },
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
  heroVideo: "/videos/hero-upscaled.mp4",
  heroAudio: "/audio/hero.mp3",
  heroPoster:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=85",
  heroPosterMobile:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=85&fit=crop&crop=top",
  aboutHero:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&q=80",
  farmWide:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80",
  farmAtmospheric:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80",
  contactHero:
    "https://images.unsplash.com/photo-1574943320210-5538b2583fcb?w=1600&q=80",
};

// ---------------------------------------------------------------------------
// Homepage-only content. Scoped to the redesigned home page — secondary pages
// (Solutions, Resources, Products) keep using the data above unmodified.
// ---------------------------------------------------------------------------

export const portfolioProof = [
  {
    category: "Liver Health",
    products: [{ name: "Liver-OK", slug: "liver-ok" }],
  },
  {
    category: "Digestive Health",
    products: [{ name: "Rumi-OK", slug: "rumi-ok-powder" }],
  },
  {
    category: "Reproductive & Uterine Care",
    products: [{ name: "Utrovibe", slug: "utrovibe" }],
  },
  {
    category: "Pain & Inflammation",
    products: [
      { name: "Pyrovibe", slug: "pyrovibe-injection" },
      { name: "Megluvibe", slug: "megluvibe" },
      { name: "Cattlespas", slug: "cattlespas" },
    ],
  },
  {
    category: "Infection Control",
    products: [
      { name: "Cattle-Cef", slug: "cattle-cef" },
      { name: "Cattlecef-SB", slug: "cattlecef-sb" },
    ],
  },
  {
    category: "Parasite Control",
    products: [
      { name: "Fendivibe Plus", slug: "fendivibe-plus" },
      { name: "Flukevibe DS", slug: "flukevibe-ds" },
      { name: "Worms-OK Plus", slug: "worms-ok-plus" },
    ],
  },
  {
    category: "Nutrition & Productivity",
    products: [
      { name: "Cattlemin", slug: "cattlemin" },
      { name: "Cattlestar range", slug: "cattlestar" },
    ],
  },
];

export const problemCards = [
  {
    number: "01",
    icon: "digestion",
    title: "Poor Digestion",
    description:
      "Reduced appetite and inefficient feed utilization can affect growth and overall performance.",
  },
  {
    number: "02",
    icon: "production",
    title: "Production Challenges",
    description:
      "Calcium imbalance and nutritional deficiencies can affect recovery and milk productivity.",
  },
  {
    number: "03",
    icon: "reproductive",
    title: "Reproductive Setbacks",
    description:
      "Uterine and post-calving challenges can disrupt the production cycle.",
  },
  {
    number: "04",
    icon: "pain",
    title: "Pain, Infection & Parasites",
    description:
      "Pain, inflammation, infections and parasite burdens can compromise animal health.",
  },
];

export const solutionPillars = [
  {
    id: "nutrition-productivity",
    number: "01",
    eyebrow: "Nutrition & Productivity",
    icon: "nutrition",
    heading: "Build the foundation.",
    description:
      "Support essential nutrition, mineral balance, growth, fertility and milk productivity.",
    products: [
      { name: "Cattlemin", slug: "cattlemin" },
      { name: "Cattlestar", slug: "cattlestar" },
      { name: "Cattlestar Gold", slug: null },
      { name: "Cattlestar-DS", slug: "cattlestar-ds" },
    ],
  },
  {
    id: "digestion-liver",
    number: "02",
    eyebrow: "Digestion & Liver Health",
    icon: "digestion",
    heading: "Better inside. Better performance outside.",
    description:
      "Support appetite, digestion, rumen function, nutrient utilization and liver health.",
    products: [
      { name: "Rumi-OK", slug: "rumi-ok-powder" },
      { name: "Liver-OK", slug: "liver-ok" },
    ],
  },
  {
    id: "reproductive-uterine",
    number: "03",
    eyebrow: "Reproductive & Uterine Care",
    icon: "reproductive",
    heading: "Support recovery when timing matters most.",
    description:
      "Solutions designed around uterine health, post-calving recovery and reproductive challenges.",
    products: [{ name: "Utrovibe", slug: "utrovibe" }],
  },
  {
    id: "pain-fever-inflammation",
    number: "04",
    eyebrow: "Pain, Fever & Inflammation",
    icon: "pain",
    heading: "When relief can't wait.",
    description:
      "Veterinary solutions for pain, fever, inflammation, mastitis, lameness and related conditions.",
    products: [
      { name: "Pyrovibe", slug: "pyrovibe-injection" },
      { name: "Pyrovibe Bolus", slug: "pyrovibe-bolus" },
      { name: "Megluvibe", slug: "megluvibe" },
      { name: "Cattlespas", slug: "cattlespas" },
    ],
  },
  {
    id: "infection-parasite",
    number: "05",
    eyebrow: "Infection & Parasite Control",
    icon: "parasite",
    heading: "Protection against biological threats.",
    description:
      "Solutions addressing bacterial infections and internal and external parasite challenges.",
    products: [
      { name: "Cattle-Cef", slug: "cattle-cef" },
      { name: "Cattlecef-SB", slug: "cattlecef-sb" },
      { name: "Fendivibe Plus", slug: "fendivibe-plus" },
      { name: "Flukevibe DS", slug: "flukevibe-ds" },
      { name: "Worms-OK Plus", slug: "worms-ok-plus" },
    ],
  },
];

export const homeShowcaseSlugs = [
  "liver-ok",
  "rumi-ok-powder",
  "utrovibe",
  "pyrovibe-injection",
  "megluvibe",
  "cattle-cef",
  "fendivibe-plus",
  "cattlemin",
  "cattlestar",
];

export const howItWorksSteps = [
  {
    number: "01",
    icon: "identify",
    title: "Identify",
    description: "Recognise the animal's health, nutritional or productivity challenge.",
  },
  {
    number: "02",
    icon: "choose",
    title: "Choose",
    description: "Explore the Cattlevibes solution designed around the specific need.",
  },
  {
    number: "03",
    icon: "use",
    title: "Use Responsibly",
    description: "Follow product directions and veterinary guidance where applicable.",
  },
  {
    number: "04",
    icon: "support",
    title: "Support",
    description:
      "Support recovery, nutrition and performance through the appropriate stage of the animal's cycle.",
  },
];

export const healthJourneyStages = [
  "Nutrition",
  "Digestion",
  "Growth",
  "Reproduction",
  "Lactation",
  "Recovery",
];

export const brandPillars = [
  {
    title: "Health",
    icon: "health",
    description: "Veterinary formulations designed around real livestock health challenges.",
  },
  {
    title: "Nutrition",
    icon: "nutrition",
    description: "Essential vitamins, minerals, calcium and nutritional support.",
  },
  {
    title: "Productivity",
    icon: "productivity",
    description:
      "Solutions supporting growth, milk production, reproductive health and animal performance.",
  },
];

export const lifecycleStages = [
  { id: "grow", label: "Grow", description: "Nutrition + minerals" },
  { id: "digest", label: "Digest", description: "Rumen + liver support" },
  { id: "calve", label: "Calve", description: "Uterine + calcium support" },
  { id: "produce", label: "Produce", description: "Milk + metabolic support" },
  { id: "protect", label: "Protect", description: "Infection + parasite control" },
  { id: "recover", label: "Recover", description: "Pain + inflammation support" },
];

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
