export type ProductCategory =
  | "Veterinary Medicines"
  | "Digestive & Liver Health"
  | "Reproductive & Uterine Care"
  | "Parasite Control"
  | "Nutritional Supplements"
  | "Calcium & Milk Support";

export type Formulation =
  | "Injection"
  | "Bolus"
  | "Powder"
  | "Liquid"
  | "Gel"
  | "Tablet"
  | "Sachet";

export type AnimalType =
  | "Cattle"
  | "Buffalo"
  | "Goat"
  | "Sheep"
  | "Horse"
  | "Calf"
  | "Pig"
  | "Poultry"
  | "Aqua"
  | "Dog";

export type HealthConcern =
  | "Liver Health"
  | "Digestive Health"
  | "Reproductive Health"
  | "Parasite Control"
  | "Nutrition"
  | "Calcium & Minerals"
  | "Milk Productivity"
  | "Antibiotic"
  | "Fever & Inflammation"
  | "Hypocalcemia Support";

export interface ProductInfo {
  composition?: string;
  indications?: string;
  dosage?: string;
  presentation?: string;
  applicableAnimals?: string;
  withdrawalPeriod?: string;
  storage?: string;
  productPositioning?: string;
  safetyClassification?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  formulation: Formulation;
  animals: AnimalType[];
  healthConcerns: HealthConcern[];
  shortDescription: string;
  description: string;
  benefits: string[];
  info: ProductInfo;
  featured?: boolean;
  bestseller?: boolean;
  relatedSlugs?: string[];
  images?: string[];
}

export interface Solution {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  productSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
