export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070b0f] text-black-900 dark:text-white pt-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}

        <div className="relative mb-28">
          {/* Background Text */}
          <h1 className="absolute -top-10 left-0 text-[8rem] md:text-[10rem] font-bold text-white/5 pointer-events-none">
            SERVICES
          </h1>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Our <br />
                <span className="text-emerald-400">Services</span>
              </h1>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                MedFinder provides a set of intelligent healthcare services
                designed to simplify medicine discovery, comparison, and
                ordering through a clean and intuitive digital experience.
              </p>

              {/* Small highlight stats */}
              <div className="flex gap-6 text-sm">
                <span className="text-emerald-400 font-semibold">
                  10K+ Medicines
                </span>
                <span className="text-emerald-400 font-semibold">
                  Verified Data
                </span>
                <span className="text-emerald-400 font-semibold">
                  Real-time APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICE SECTIONS ================= */}
        <div className="space-y-24">
          <ServiceBlock
            title="Medicine Search"
            subtitle="SMART DISCOVERY"
            desc="Search medicines instantly using real-time APIs and access detailed information including usage, warnings, and generic alternatives."
            image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
          />

          <ServiceBlock
            title="Price Comparison"
            subtitle="AFFORDABLE OPTIONS"
            desc="Compare medicine prices and identify affordable generic substitutes to reduce healthcare costs effectively."
            image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
            reverse
          />

          <ServiceBlock
            title="Order Simulation"
            subtitle="END-TO-END FLOW"
            desc="Experience a complete medicine ordering workflow including cart, authentication, address capture, and order confirmation for academic demonstration."
            image="https://images.unsplash.com/photo-1580281658629-296d2f7fdf0b"
          />
        </div>
      </div>
    </div>
  );
}

/* ================= SERVICE BLOCK ================= */

function ServiceBlock({ title, subtitle, desc, image, reverse }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          className="rounded-3xl object-cover h-80 w-full"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-sm text-emerald-400 mb-3 tracking-widest">
          {subtitle}
        </p>

        <h2 className="text-4xl font-semibold mb-4">{title}</h2>

        <p className="text-gray-300 leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  );
}
