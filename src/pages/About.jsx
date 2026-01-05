export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070b0f] text-gray-900 dark:text-white px-6 pt-28">
      <div className="max-w-7xl mx-auto">
        {/* ================= ABOUT HEADER ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ABOUT <br />
              <span className="text-emerald-400">MEDFINDER</span>
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-md">
              MedFinder is a modern medicine discovery platform designed to help
              users search medicines, compare prices, and explore verified
              generic alternatives with ease.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1675033558464-a9d0859b6230?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pharmacy"
              className="rounded-2xl object-cover h-48 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
              alt="medicine"
              className="rounded-2xl object-cover h-48 w-full"
            />
          </div>
        </div>

        {/* ================= PHILOSOPHY ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
            alt="healthcare"
            className="rounded-3xl object-cover h-72 w-full"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Our <span className="text-emerald-400">Philosophy</span>
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-md">
              We believe healthcare information should be simple, transparent,
              and accessible. MedFinder focuses on clarity, affordability, and
              trust by providing accurate medicine data and generic
              alternatives.
            </p>
          </div>
        </div>

        {/* ================= TEAM SECTION ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Meet the <span className="text-emerald-400">Team</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Built with passion as an academic and learning-focused project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <TeamCard
            name="Student Developer"
            role="Frontend & UI Developer"
            image="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
          />

          <TeamCard
            name="Project Mentor"
            role="Academic Guide"
            image="https://images.unsplash.com/photo-1614289371518-722f2615943d"
          />
        </div>
      </div>
    </div>
  );
}

/* ================= TEAM CARD ================= */

function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur">
      <img
        src={image}
        alt={name}
        className="h-40 w-40 mx-auto rounded-2xl object-cover mb-6"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm mt-1">{role}</p>
    </div>
  );
}
