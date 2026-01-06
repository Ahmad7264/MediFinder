import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}*&limit=12`
    )
      .then((res) => res.json())
      .then((d) => {
        const meds =
          d.results?.map((item) => item.openfda?.brand_name?.[0]) || [];
        setData([...new Set(meds)]);
      });
  }, [query]);

  return (
    <div className="min-h-screen dark:bg-[#070b0f] text-gray-900 dark:text-white px-6 pt-28">
      <h2 className="text-xl mb-6">Medicine Search</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {data.map((m, i) => (
          <div
            key={i}
            className="bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <h3 className="text-emerald-400 font-semibold">{m}</h3>

            <button
              onClick={() => navigate("/medicine", { state: { medicine: m } })}
              className="mt-4 px-4 py-2 bg-emerald-500 text-black rounded-full text-sm cursor-pointer"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
