"use client";

import { useState, useMemo } from "react";
import { products, categoryFilterMap } from "@/data/products";
import type { AnimalType, HealthConcern } from "@/lib/types";

interface ProductFilterProps {
  onFilter: (filtered: typeof products) => void;
  initialQuery?: string;
  initialProducts?: typeof products;
}

export function ProductSearch({
  onFilter,
  initialQuery = "",
  initialProducts = products,
}: ProductFilterProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("");
  const [formulation, setFormulation] = useState("");
  const [animal, setAnimal] = useState("");
  const [healthConcern, setHealthConcern] = useState("");

  const formulations = useMemo(
    () => [...new Set(products.map((p) => p.formulation))],
    [],
  );
  const animals = useMemo(
    () => [...new Set(products.flatMap((p) => p.animals))],
    [],
  );
  const healthConcerns = useMemo(
    () => [...new Set(products.flatMap((p) => p.healthConcerns))],
    [],
  );

  const applyFilters = (
    q: string,
    cat: string,
    form: string,
    anim: string,
    health: string,
  ) => {
    let result = [...initialProducts];

    if (q) {
      const lower = q.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.shortDescription.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower),
      );
    }

    if (cat && categoryFilterMap[cat]) {
      const cats = categoryFilterMap[cat];
      result = result.filter((p) => cats.includes(p.category));
    }

    if (form) {
      result = result.filter((p) => p.formulation === form);
    }

    if (anim) {
      result = result.filter((p) => p.animals.includes(anim as AnimalType));
    }

    if (health) {
      result = result.filter((p) =>
        p.healthConcerns.includes(health as HealthConcern),
      );
    }

    onFilter(result);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    applyFilters(value, category, formulation, animal, healthConcern);
  };

  const handleFilterChange = (
    type: "category" | "formulation" | "animal" | "health",
    value: string,
  ) => {
    const next = {
      category,
      formulation,
      animal,
      healthConcern,
    };
    if (type === "category") {
      setCategory(value);
      next.category = value;
    } else if (type === "formulation") {
      setFormulation(value);
      next.formulation = value;
    } else if (type === "animal") {
      setAnimal(value);
      next.animal = value;
    } else {
      setHealthConcern(value);
      next.healthConcern = value;
    }
    applyFilters(query, next.category, next.formulation, next.animal, next.healthConcern);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-sm outline-none transition-colors focus:border-brand-orange"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <FilterSelect
          label="Category"
          value={category}
          onChange={(v) => handleFilterChange("category", v)}
          options={Object.keys(categoryFilterMap)}
        />
        <FilterSelect
          label="Formulation"
          value={formulation}
          onChange={(v) => handleFilterChange("formulation", v)}
          options={formulations}
        />
        <FilterSelect
          label="Animal"
          value={animal}
          onChange={(v) => handleFilterChange("animal", v)}
          options={animals}
        />
        <FilterSelect
          label="Health Concern"
          value={healthConcern}
          onChange={(v) => handleFilterChange("health", v)}
          options={healthConcerns}
        />
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
      className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand-orange"
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
