import { useEffect, useState } from "react";
import { Search, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MedicineSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    const fetchMedicines = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}*&limit=5`,
          { signal: controller.signal }
        );
        const data = await res.json();

        const meds =
          data.results?.map((item) => item.openfda?.brand_name?.[0]) || [];

        setResults([...new Set(meds)]);
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
    return () => controller.abort();
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setResults([]);
  };

  return (
    <div className="relative max-w-xl mx-auto mt-10">
      {/* SEARCH BAR */}
      <div
        className="
          flex items-center gap-3 px-6 py-4 rounded-full
          bg-white dark:bg-white/10
          border border-gray-300 dark:border-white/20
          shadow-sm dark:shadow-none
          focus-within:border-emerald-400
          transition
        "
      >
        {loading ? (
          <Loader className="animate-spin text-emerald-500" size={18} />
        ) : (
          <Search className="text-emerald-500" size={18} />
        )}

        <input
          className="
            flex-1 bg-transparent outline-none
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
          "
          placeholder="Search medicine..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="
            px-5 py-2 rounded-full text-sm font-medium
            bg-emerald-500 text-black
            hover:bg-emerald-400 transition
          "
        >
          Search
        </button>
      </div>

      {/* AUTOCOMPLETE DROPDOWN */}
      {results.length > 0 && (
        <div
          className="
            absolute w-full mt-2 rounded-xl z-50 overflow-hidden
            bg-white dark:bg-[#0b1220]
            border border-gray-200 dark:border-white/10
            shadow-lg
          "
        >
          {results.map((item, i) => (
            <div
              key={i}
              onClick={() =>
                navigate("/medicine", { state: { medicine: item } })
              }
              className="
                px-6 py-3 cursor-pointer text-sm
                text-gray-800 dark:text-gray-200
                hover:bg-emerald-500/10
              "
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

git 