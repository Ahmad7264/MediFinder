import { HeartPulse } from "lucide-react";
import MedicineSearch from "./MedicineSearch";

export default function Home() {
  return (
    <section className="bg-white dark:bg-[#070b0f] text-gray-900 dark:text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
            alt="medicine"
            className="w-full h-full object-cover opacity-20"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 
            bg-gradient-to-b 
            from-white/80 via-white/60 to-white 
            dark:from-[#070b0f]/90 dark:via-[#070b0f]/80 dark:to-[#070b0f]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Icon */}
          <div
            className="mx-auto mb-6 h-20 w-20 rounded-full 
            bg-emerald-500/15 flex items-center justify-center"
          >
            <HeartPulse className="text-emerald-400" size={40} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Generic <span className="text-emerald-400">Medicine Finder</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg">
            Search medicines and discover affordable, verified generic
            alternatives.
          </p>

          {/* Big Search */}
          <div className="mt-10">
            <MedicineSearch />
          </div>

          {/* Feature Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <FeaturePill label="10,000+ Medicines" />
            <FeaturePill label="Verified Generics" />
            <FeaturePill label="Real-time Pricing" />
          </div>
        </div>
      </div>

      {/* ================= CATEGORY CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <CategoryCard
          title="Prescription Medicine"
          desc="Over 10,000 prescription medicines available"
          image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
        />

        <CategoryCard
          title="Surgical Products"
          desc="Trusted surgical tools and medical equipment"
          image="https://plus.unsplash.com/premium_photo-1723914178151-4a11fcbd968a"
        />

        <CategoryCard
          title="Supplements & Vitamins"
          desc="Essential nutrients for a healthier lifestyle"
          image="https://images.unsplash.com/photo-1670850756917-8ed6c2a71e12"
        />
      </div>

      {/* ================= POPULAR CATEGORIES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6">Popular Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <SmallCard label="Diabetes Care" />
          <SmallCard label="Vitamins" />
          <SmallCard label="Pain Relief" />
          <SmallCard label="Allergy" />
          <SmallCard label="Heart Care" />
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function FeaturePill({ label }) {
  return (
    <span
      className="
        px-4 py-2 rounded-full text-sm
        bg-gray-200 text-gray-800
        dark:bg-white/5 dark:text-gray-300
      "
    >
      ✔ {label}
    </span>
  );
}

function CategoryCard({ title, desc, image }) {
  return (
    <div
      className="
        rounded-2xl overflow-hidden
        bg-white dark:bg-white/5
        border border-gray-200 dark:border-white/10
        hover:border-emerald-400/40
        transition
      "
    >
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{desc}</p>

        <button className="mt-4 text-sm text-emerald-500 hover:underline">
          Explore →
        </button>
      </div>
    </div>
  );
}

function SmallCard({ label }) {
  return (
    <div
      className="
        bg-white dark:bg-white/5
        border border-gray-200 dark:border-white/10
        rounded-xl px-4 py-6 text-center text-sm
        hover:border-emerald-400/40 transition cursor-pointer
      "
    >
      {label}
    </div>
  );
}
