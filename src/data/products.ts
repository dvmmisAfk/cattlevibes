import type { Product, ProductCategory } from "@/lib/types";
import { getProductImages } from "@/data/product-images";

export const products: Product[] = [
  {
    slug: "liver-ok",
    name: "LIVER-OK",
    category: "Digestive & Liver Health",
    formulation: "Liquid",
    animals: ["Cattle", "Buffalo", "Goat", "Sheep"],
    healthConcerns: ["Liver Health", "Digestive Health"],
    shortDescription:
      "Hepatoprotective liver tonic formulated to support liver function and digestive health in livestock.",
    description:
      "LIVER-OK is a hepatoprotective formulation designed to support liver health and aid recovery from hepatic stress in ruminants. Refer to the official product catalogue for complete composition, indications, and dosage guidelines.",
    benefits: [
      "Supports healthy liver function in livestock",
      "Aids digestive health and feed utilization",
      "Formulated for ruminant health management",
      "Suitable for veterinary-guided use in dairy and farm animals",
    ],
    info: {
      presentation: "100 ml, 250 ml, 500 ml & 1 L",
      applicableAnimals: "Cattle, Buffalo, Goat, Sheep",
      storage: "Store in a cool, dry place away from direct sunlight",
    },
    featured: true,
    bestseller: true,
    relatedSlugs: ["rumi-ok-powder", "cattlemin", "liver-ok-injection"],
  },
  {
    slug: "liver-ok-injection",
    name: "LIVER-OK Injection",
    category: "Digestive & Liver Health",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Liver Health"],
    shortDescription:
      "Injectable hepatoprotective support for veterinary use in large animals.",
    description:
      "LIVER-OK Injection provides injectable hepatoprotective support for large animals under veterinary supervision. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Injectable formulation for veterinary administration",
      "Supports liver health management in large animals",
      "Professional veterinary healthcare solution",
    ],
    info: {
      presentation: "100 ml",
      composition: "B-Complex Liver Extract with Vitamin B12 Injection",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store protected from light & moisture",
    },
    relatedSlugs: ["liver-ok", "rumi-ok-powder", "pyrovibe-injection"],
  },
  {
    slug: "utrovibe",
    name: "UTROVIBE",
    category: "Reproductive & Uterine Care",
    formulation: "Liquid",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Reproductive Health"],
    bestseller: true,
    shortDescription:
      "Uterine tonic and cleansing liquid to facilitate expulsion of retained placenta and support uterine health.",
    description:
      "UTROVIBE Liquid is formulated for reproductive and uterine health support in dairy animals, helping facilitate natural expulsion of retained placenta and supporting postpartum uterine involution. Refer to the official product catalogue for complete indications and dosage.",
    benefits: [
      "Helps facilitate expulsion of retained placenta (ROP)",
      "Promotes natural uterine cleansing and involution",
      "Supports milk production and reproductive cycle return",
      "Palatable liquid formulation for dairy cattle and buffalo",
    ],
    info: {
      presentation: "250 ml, 500 ml & 1 L",
      composition: "Herbal Uterine Tonic & Cleansing Liquid",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store in a cool, dry place away from direct sunlight",
    },
    relatedSlugs: ["cattlespas", "cattlestar", "megluvibe"],
  },
  {
    slug: "rumi-ok-powder",
    name: "RUMI-OK Powder",
    category: "Digestive & Liver Health",
    formulation: "Powder",
    animals: ["Cattle", "Buffalo", "Goat", "Sheep"],
    healthConcerns: ["Digestive Health"],
    shortDescription:
      "Rumen conditioning powder to support digestive function and rumen health in ruminants.",
    description:
      "RUMI-OK Powder is a rumen conditioning formulation designed to support digestive function in ruminants. Refer to the official product catalogue for complete product details.",
    benefits: [
      "Supports rumen health and digestion",
      "Powder formulation for easy administration",
      "Suitable for cattle, buffalo, goat, and sheep",
      "Aids feed utilization in ruminants",
    ],
    info: {
      presentation: "250 gm, 500 gm, 1 kg & 5 kg",
      applicableAnimals: "Cattle, Buffalo, Goat, Sheep",
      storage: "Store in a cool, dry place",
    },
    featured: true,
    relatedSlugs: ["rumi-ok-bolus", "liver-ok", "cattlemin"],
  },
  {
    slug: "rumi-ok-bolus",
    name: "RUMI-OK Bolus",
    category: "Digestive & Liver Health",
    formulation: "Bolus",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Digestive Health"],
    shortDescription:
      "Rumen conditioning bolus for digestive support in large ruminants.",
    description:
      "RUMI-OK Bolus provides rumen conditioning support in a convenient bolus form for large ruminants. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Convenient bolus formulation",
      "Supports rumen health in large ruminants",
      "Aids digestive function management",
    ],
    info: {
      presentation: "10 × 4 Bolus",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store in a cool, dry place",
    },
    relatedSlugs: ["rumi-ok-powder", "liver-ok", "cattlemin"],
  },
  {
    slug: "cattlespas",
    name: "CATTLESPAS Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Reproductive Health"],
    shortDescription:
      "Veterinary injection for uterine and reproductive health management.",
    description:
      "CATTLESPAS Injection is a veterinary medicine for reproductive health management. Refer to the official product catalogue for complete indications and dosage.",
    benefits: [
      "Veterinary injection for professional use",
      "Supports reproductive health management",
      "Formulated for cattle and buffalo",
    ],
    info: {
      presentation: "100 ml",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store as directed on product label",
    },
    relatedSlugs: ["utrovibe", "megluvibe", "pyrovibe-injection"],
  },
  {
    slug: "pyrovibe-injection",
    name: "PYROVIBE Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Fever & Inflammation"],
    shortDescription:
      "Anti-inflammatory and antipyretic injection for veterinary use in large animals.",
    description:
      "PYROVIBE Injection is an anti-inflammatory and antipyretic veterinary medicine. Refer to the official product catalogue for complete composition, indications, dosage, and withdrawal period information.",
    benefits: [
      "Anti-inflammatory and antipyretic action",
      "Injectable formulation for veterinary use",
      "Suitable for large animals under veterinary guidance",
    ],
    info: {
      presentation: "100 ml",
      applicableAnimals: "Cattle, Buffalo, Horse",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store as directed on product label",
    },
    featured: true,
    bestseller: true,
    relatedSlugs: ["pyrovibe-bolus", "cattlespas", "cattle-cef"],
  },
  {
    slug: "pyrovibe-bolus",
    name: "PYROVIBE Bolus",
    category: "Veterinary Medicines",
    formulation: "Bolus",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Fever & Inflammation"],
    shortDescription:
      "Anti-inflammatory and antipyretic bolus for large ruminants.",
    description:
      "PYROVIBE Bolus provides anti-inflammatory and antipyretic support in bolus form. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Convenient bolus administration",
      "Anti-inflammatory and antipyretic support",
      "Formulated for cattle and buffalo",
    ],
    info: {
      presentation: "10 × 4 BOLUS",
      applicableAnimals: "Cattle, Buffalo",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store in a cool, dry place",
    },
    featured: true,
    bestseller: true,
    relatedSlugs: ["pyrovibe-injection", "cattlespas", "megluvibe"],
  },
  {
    slug: "megluvibe",
    name: "MEGLUVIBE Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Reproductive Health", "Fever & Inflammation"],
    shortDescription:
      "Veterinary injection for reproductive and inflammatory conditions in dairy animals.",
    description:
      "MEGLUVIBE Injection is a veterinary injection for use in dairy animals. Refer to the official product catalogue for complete indications and dosage.",
    benefits: [
      "Veterinary injection for professional administration",
      "Supports health management in dairy animals",
      "Formulated for cattle and buffalo",
    ],
    info: {
      presentation: "100 ml",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store as directed on product label",
    },
    relatedSlugs: ["cattlespas", "utrovibe", "pyrovibe-injection"],
  },
  {
    slug: "cattle-phos",
    name: "CATTLE PHOS Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Calcium & Minerals"],
    shortDescription:
      "Phosphorus and mineral support injection for large ruminants.",
    description:
      "CATTLE PHOS Injection provides phosphorus and mineral support for cattle and buffalo. Refer to the official product catalogue for complete composition and dosage.",
    benefits: [
      "Mineral and phosphorus support",
      "Injectable formulation for large ruminants",
      "Supports metabolic health in dairy animals",
    ],
    info: {
      presentation: "100 ml",
      composition: "Butaphosphan & Cyanocobalamin Injection",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store protected from direct light. Keep out of reach of children",
    },
    featured: true,
    relatedSlugs: ["cattlemin", "cattlestar", "cattlestar-ds"],
  },
  {
    slug: "cattlecef-sb",
    name: "CATTLECEF-SB Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Antibiotic"],
    shortDescription:
      "Ceftiofur and Sulbactam combination antibiotic injection for livestock.",
    description:
      "CATTLECEF-SB Injection combines ceftiofur with sulbactam for veterinary antibiotic therapy. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Combination antibiotic formulation",
      "Broad-spectrum veterinary support",
      "For use under veterinary supervision",
    ],
    info: {
      presentation: "Vials: 4.5 gm",
      applicableAnimals: "Cattle, Buffalo",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store as directed on product label",
    },
    relatedSlugs: ["cattle-cef", "pyrovibe-injection", "fendivibe-plus"],
  },
  {
    slug: "fendivibe-plus",
    name: "FENDIVIBE PLUS",
    category: "Parasite Control",
    formulation: "Bolus",
    animals: ["Cattle", "Buffalo", "Sheep", "Goat"],
    healthConcerns: ["Parasite Control"],
    shortDescription:
      "Broad-spectrum anthelmintic bolus for internal parasite control in livestock.",
    description:
      "FENDIVIBE PLUS is a broad-spectrum anthelmintic bolus (Fenbendazole & Ivermectin) formulated for internal parasite control. Refer to the official product catalogue for complete composition, indications, and dosage.",
    benefits: [
      "Broad-spectrum anthelmintic action",
      "Supports internal parasite control",
      "Suitable for multiple livestock species",
    ],
    info: {
      presentation: "10 Strips per Box 1 Bolus Per Strip",
      composition: "Fenbendazole & Ivermectin Bolus",
      applicableAnimals: "Cattle, Buffalo, Sheep, Goat",
      withdrawalPeriod: "Single dose therapy. As per product catalogue",
      storage: "Store in a cool, dry place",
    },
    relatedSlugs: ["flukevibe-ds", "worms-ok-plus", "liver-ok"],
  },
  {
    slug: "flukevibe-ds",
    name: "FLUKEVIBE DS",
    category: "Parasite Control",
    formulation: "Bolus",
    animals: ["Cattle", "Buffalo", "Sheep", "Goat"],
    healthConcerns: ["Parasite Control"],
    shortDescription:
      "Flukicide bolus formulation for liver fluke control in ruminants.",
    description:
      "FLUKEVIBE DS is formulated for liver fluke control in ruminants (Oxyclozanide & Levamisole). Refer to the official product catalogue for complete composition, indications, and dosage.",
    benefits: [
      "Targeted flukicide formulation",
      "Supports liver fluke control in ruminants",
      "Veterinary parasite management solution",
    ],
    info: {
      presentation: "10 Strips per Box 1 Bolus Per Strip",
      applicableAnimals: "Cattle, Buffalo, Sheep, Goat",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store in a cool, dry place",
    },
    relatedSlugs: ["fendivibe-plus", "worms-ok-plus", "liver-ok"],
  },
  {
    slug: "worms-ok-plus",
    name: "WORMS-OK PLUS",
    category: "Parasite Control",
    formulation: "Liquid",
    animals: ["Cattle", "Buffalo", "Sheep", "Goat"],
    healthConcerns: ["Parasite Control"],
    shortDescription:
      "Enhanced anthelmintic oral suspension for comprehensive worm control.",
    description:
      "WORMS-OK PLUS is an enhanced anthelmintic oral suspension (Fenbendazole & Ivermectin) for comprehensive worm control. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Enhanced anthelmintic formulation",
      "Comprehensive worm control support",
      "For veterinary-guided parasite management",
    ],
    info: {
      presentation: "30 ml",
      composition: "Fenbendazole & Ivermectin Oral Suspension",
      applicableAnimals: "Cattle, Buffalo, Sheep, Goat",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store in a cool, dry place",
    },
    relatedSlugs: ["fendivibe-plus", "flukevibe-ds", "liver-ok"],
  },
  {
    slug: "cattlemin",
    name: "CATTLEMIN",
    category: "Nutritional Supplements",
    formulation: "Powder",
    animals: ["Cattle", "Buffalo", "Goat", "Sheep"],
    healthConcerns: ["Nutrition", "Calcium & Minerals"],
    shortDescription:
      "Chelated mineral mixture for metabolic support, milk productivity, and reproductive performance.",
    description:
      "CATTLEMIN is a chelated mineral mixture enriched with vitamins and amino acids to support optimal herd health, improve feed utilization, enhance milk production, and aid reproductive performance.",
    benefits: [
      "Enhanced bioavailability through chelated minerals",
      "Improves milk yield and fat percentage",
      "Supports reproductive efficiency and conception rates",
      "Promotes stronger immunity and overall metabolic health",
    ],
    info: {
      presentation: "500 gm, 1 kg, 5 kg, 10 kg & 25 kg",
      composition: "Chelated Minerals, Vitamins & Amino Acids Supplement",
      applicableAnimals: "Cattle, Buffalo, Goat, Sheep",
      storage: "Store in a cool, dry place away from direct sunlight",
    },
    featured: true,
    relatedSlugs: ["cattlestar", "cattlestar-ds", "cattle-phos"],
  },
  {
    slug: "cattlestar-gel",
    name: "CATTLESTAR GEL",
    category: "Calcium & Milk Support",
    formulation: "Gel",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Calcium & Minerals", "Milk Productivity"],
    shortDescription:
      "Ionic calcium rich gel supplement for post-calving support and milk productivity.",
    description:
      "CATTLESTAR GEL provides high-potency ionic calcium in gel form to help maintain calcium levels, prevent milk fever, and support calving recovery in dairy cattle and buffalo.",
    benefits: [
      "Ionic calcium rich gel for rapid absorption",
      "Maintains calcium levels around and after calving",
      "Helpful in prevention and management of milk fever",
      "Supports post-calving recovery and milk productivity",
    ],
    info: {
      presentation: "300 gm",
      composition: "Ionic Calcium Rich Oral Gel",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store as directed on product label",
    },
    relatedSlugs: ["cattlestar", "cattlestar-advance-gel", "cattlestar-ds"],
  },
  {
    slug: "cattlestar-advance-gel",
    name: "CATTLESTAR ADVANCE GEL",
    category: "Calcium & Milk Support",
    formulation: "Gel",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Calcium & Minerals", "Milk Productivity"],
    shortDescription:
      "Advanced calcium gel formulation with enhanced mineral support for dairy animals.",
    description:
      "CATTLESTAR ADVANCE GEL is an advanced calcium gel with enhanced mineral support. Refer to the official product catalogue for complete product details.",
    benefits: [
      "Advanced calcium and mineral gel formulation",
      "Enhanced support for dairy animals",
      "Convenient gel administration",
    ],
    info: {
      presentation: "300 gm",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store as directed on product label",
    },
    relatedSlugs: ["cattlestar-gel", "cattlestar", "cattlestar-ds"],
  },
  {
    slug: "cattlestar",
    name: "CATTLESTAR",
    category: "Calcium & Milk Support",
    formulation: "Liquid",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Calcium & Minerals", "Milk Productivity"],
    shortDescription:
      "Calcium and mineral liquid supplement for milk productivity and metabolic support.",
    description:
      "CATTLESTAR is a calcium and mineral liquid supplement for dairy animals. Refer to the official product catalogue for complete composition, indications, and dosage.",
    benefits: [
      "Calcium and mineral supplementation",
      "Supports milk productivity",
      "Liquid formulation for easy administration",
      "Metabolic support for dairy animals",
    ],
    info: {
      presentation: "1, 2, 5, 10 & 20 L",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store in a cool, dry place",
    },
    featured: true,
    relatedSlugs: ["cattlestar-ds", "cattlestar-gold", "cattlestar-gel"],
  },
  {
    slug: "cattlestar-ds",
    name: "CATTLESTAR-DS",
    category: "Calcium & Milk Support",
    formulation: "Liquid",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Calcium & Minerals", "Milk Productivity"],
    shortDescription:
      "Double-strength calcium liquid for enhanced mineral support in dairy animals.",
    description:
      "CATTLESTAR-DS is a double-strength calcium liquid formulation. Refer to the official product catalogue for complete product information.",
    benefits: [
      "Double-strength calcium formulation",
      "Enhanced mineral support",
      "Supports dairy animal productivity",
    ],
    info: {
      presentation: "1, 2, 5, 10 & 20 L",
      applicableAnimals: "Cattle, Buffalo",
      storage: "Store in a cool, dry place",
    },
    relatedSlugs: ["cattlestar", "cattlestar-gold", "cattle-phos"],
  },
  {
    slug: "cattlestar-gold",
    name: "CATTLESTAR GOLD",
    category: "Calcium & Milk Support",
    formulation: "Liquid",
    animals: [
      "Cattle",
      "Buffalo",
      "Calf",
      "Sheep",
      "Goat",
    ],
    healthConcerns: [
      "Calcium & Minerals",
      "Milk Productivity",
      "Hypocalcemia Support",
    ],
    shortDescription:
      "Liquid calcium and nutritional supplement formulated to support calcium balance, milk productivity, rumen health, immunity and overall livestock performance.",
    description:
      "CATTLESTAR GOLD is a liquid calcium and nutritional supplement formulated to support dairy animals during periods of increased calcium demand, particularly around and after calving. It supports optimal calcium levels, milk production, dry matter intake, rumen health, bone strength, immunity and uterine health. The catalog also positions it for helping mitigate the effects of milk fever and subclinical hypocalcemia.",
    benefits: [
      "Improves dry matter intake by improving rumen health",
      "Improves milk production and percentage of fat in milk",
      "Helps maintain optimum calcium levels in lactating cows",
      "Increases milk production after calving",
      "Improves growth rate of calves",
      "Improves health of uterus",
      "Supports bone strength",
      "Boosts immunity",
      "Helps reduce the risk/effects of milk fever",
      "Helps mitigate subclinical hypocalcemia",
      "Supports overall livestock health and productivity",
    ],
    info: {
      productPositioning: "Strongest Milk Booster Formula",
      composition:
        "Per 100 ml: Calcium 6100 mg, Phosphorus 3050 mg, Vitamin D3 12000 I.U., Vitamin B12 100 mcg, Vitamin E 1000 I.U., Vitamin H (Biotin) 30 mg, Carbohydrate 30000 mg, Zinc 1500 mg, Chromium 5 mg, Copper 500 mg, Shatavari Extract 1500 mg, Jivanti 1500 mg, Silymarin 450 mg, Piper Longum 400 mg",
      dosage:
        "Calf, Foal & Pig: 40 ml daily | Sheep, Goat & Dog: 20 ml daily | Cattle & Horses: 100 ml daily | Chicks & Broilers: 10 ml per 100 birds daily | Growers: 20 ml per 100 birds daily | Layers: 50 ml per 100 birds daily | Or as directed by the Veterinary Consultant",
      presentation: "1, 2, 5, 10 & 20 L",
      applicableAnimals:
        "Cattle, Buffalo, Horse, Calf, Foal, Pig, Sheep, Goat, Dog, Chicks, Broilers, Growers, Layers",
      safetyClassification:
        "For Animal Feed Supplement Only · Strictly Not for Medicinal/Human Use",
      storage:
        "Keep in a cool and dry place. Store below 30°C. Keep protected from direct sunlight",
    },
    featured: true,
    bestseller: true,
    relatedSlugs: ["cattlestar", "cattlestar-ds", "cattlestar-advance-gel"],
  },
  {
    slug: "cattle-cef-1g",
    name: "CATTLE-CEF 1 GM Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Antibiotic"],
    bestseller: true,
    shortDescription:
      "Ceftriaxone injection 1000 mg (1 GM) for veterinary use in bacterial infections.",
    description:
      "CATTLE-CEF 1 GM Injection is a sterile ceftriaxone injection (1000 mg) for veterinary administration via I.M. or I.V. route. Refer to the official product catalogue and packaging label for complete indications, dosage, and withdrawal guidelines.",
    benefits: [
      "Sterile ceftriaxone 1000 mg formulation",
      "For I.M. / I.V. veterinary administration",
      "Supports targeted antimicrobial therapy for bacterial infections",
      "Professional veterinary healthcare solution",
    ],
    info: {
      presentation: "Vials: 1 gm, 3 gm & 4 gm",
      composition: "Each vial contains: Ceftriaxone Sodium I.P. equivalent to Ceftriaxone 1000 mg",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store as directed on product label. Protect from light and moisture",
    },
    relatedSlugs: ["cattle-cef-3g", "cattle-cef", "cattlecef-sb"],
  },
  {
    slug: "cattle-cef-3g",
    name: "CATTLE-CEF 3 GM Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Antibiotic"],
    bestseller: true,
    shortDescription:
      "Ceftriaxone injection 3000 mg (3 GM) with sterile water diluent for veterinary use.",
    description:
      "CATTLE-CEF 3 GM Injection is a sterile ceftriaxone injection (3000 mg) supplied with sterile water for injection diluent in a molded presentation tray for I.M. or I.V. veterinary administration. Refer to the official product catalogue and packaging label for complete indications, dosage, and withdrawal guidelines.",
    benefits: [
      "High-potency ceftriaxone 3000 mg formulation",
      "Supplied complete with sterile water diluent and molded tray",
      "For I.M. / I.V. veterinary administration",
      "Professional antibiotic solution for severe bacterial infections",
    ],
    info: {
      presentation: "Vials: 1 gm, 3 gm & 4 gm",
      composition: "Each vial contains: Ceftriaxone Sodium I.P. equivalent to Ceftriaxone 3000 mg",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store as directed on product label. Protect from light and moisture",
    },
    relatedSlugs: ["cattle-cef-1g", "cattle-cef", "cattlecef-sb"],
  },
  {
    slug: "cattle-cef",
    name: "CATTLE-CEF 4 GM Injection",
    category: "Veterinary Medicines",
    formulation: "Injection",
    animals: ["Cattle", "Buffalo"],
    healthConcerns: ["Antibiotic"],
    bestseller: true,
    shortDescription:
      "Ceftriaxone injection 4000 mg (4 GM) with sterile water diluent for veterinary use in severe bacterial infections.",
    description:
      "CATTLE-CEF 4 GM Injection is a sterile ceftriaxone injection (4000 mg) supplied with sterile water for injection diluent in a molded presentation tray for I.M. or I.V. veterinary administration. Refer to the official product catalogue and packaging label for complete indications, dosage, and withdrawal guidelines.",
    benefits: [
      "High-potency ceftriaxone 4000 mg (4 GM) formulation",
      "Supplied complete with sterile water diluent and molded tray",
      "For I.M. / I.V. veterinary administration",
      "Professional antibiotic solution for severe bacterial infections",
    ],
    info: {
      presentation: "Vials: 1 gm, 3 gm & 4 gm",
      composition: "Each vial contains: Ceftriaxone Sodium I.P. equivalent to Ceftriaxone 4000 mg",
      withdrawalPeriod: "As per product catalogue",
      storage: "Store as directed on product label. Protect from light and moisture",
    },
    relatedSlugs: ["cattle-cef-1g", "cattle-cef-3g", "cattlecef-sb"],
  },
  {
    slug: "cattlemin-super",
    name: "CATTLEMIN SUPER",
    category: "Nutritional Supplements",
    formulation: "Powder",
    animals: ["Cattle", "Buffalo", "Goat", "Sheep"],
    healthConcerns: ["Nutrition", "Milk Productivity"],
    shortDescription:
      "Chelated mineral and vitamin feed supplement with banana flavour for fertility and productivity.",
    description:
      "CATTLEMIN SUPER is a highly bioavailable chelated mineral and vitamin feed supplement with delicious banana flavour formulated to maintain nutritional levels, enhance milk production, regulate hormonal balance, and support fertility and reproductive health in livestock.",
    benefits: [
      "Formulated with chelated minerals and essential vitamins for high bioavailability",
      "Helps increase milk production and maintain nutritional levels",
      "Nutritional support to pregnant animals and promotes better growth",
      "Regulates hormonal balance, maintains fertility rate and repeat breeding support",
      "Palatable banana flavour for enhanced feed intake",
    ],
    info: {
      presentation: "500 gm, 1 kg, 5 kg, 10 kg & 25 kg",
      composition:
        "Nutritional value per kg: Vitamin A 7,50,000 I.U., Vitamin D3 75,000 I.U., Vitamin E 500 mg, Niacinamide 1000 mg, Cobalt 200 mg, Copper 4500 mg, Iodine 500 mg, Iron 2000 mg, Magnesium 6000 mg, Manganese 3000 mg, Potassium 154 mg, Sodium 25 mg, Sulphur 0.95%, Zinc 9600 mg, Calcium 24.6%, Phosphorus 12.3%",
      dosage:
        "Cow, Buffalo & Horse: 10-20 kg/Ton of Feed | Calf, Goat, Pig & Sheep: 5-10 kg/Ton of Feed | Poultry & Aqua: 500 gm - 1 kg per MT of prepared feed | Regular Supplementation: Cow, Buffalo & Horse: 50-100 gm daily; Calf, Goat, Pig & Sheep: 25-30 gm daily or as directed by veterinary consultant",
      storage:
        "Keep in a cool and dry place. Keep protected from direct sunlight. Strictly not for medicinal / human use. For animal feed supplement",
    },
    featured: false,
    relatedSlugs: ["cattlemin", "cattlestar", "cattlestar-gold"],
  },
];

for (const product of products) {
  product.images = getProductImages(product.slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product?.relatedSlugs) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 3);
}

export const productCategories = [
  "Veterinary Medicines",
  "Nutritional Supplements",
  "Digestive & Liver Health",
  "Parasite Control",
  "Calcium & Mineral Support",
  "Milk & Productivity",
] as const;

export const categoryFilterMap: Record<string, ProductCategory[]> = {
  "Veterinary Medicines": ["Veterinary Medicines"],
  "Nutritional Supplements": ["Nutritional Supplements"],
  "Digestive & Liver Health": ["Digestive & Liver Health"],
  "Parasite Control": ["Parasite Control"],
  "Calcium & Mineral Support": ["Calcium & Milk Support"],
  "Milk & Productivity": ["Calcium & Milk Support"],
};