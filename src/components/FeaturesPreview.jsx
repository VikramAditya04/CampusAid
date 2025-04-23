
// src/components/FeaturesPreview.jsx
import { Link } from "react-router-dom";

const features = [
  { emoji: "📚", title: "Study Help", desc: "Share notes, tutorials & more", link: "/study-help" },
  { emoji: "🧳", title: "Lost & Found", desc: "Reunite with lost items", link: "/lost-found" },
  { emoji: "🛍️", title: "Marketplace", desc: "Buy & sell student items", link: "/marketplace" },
  { emoji: "🎉", title: "Clubs & Events", desc: "Discover campus activities", link: "/clubs-events" },
  { emoji: "🏡", title: "Roommate Finder", desc: "Find your perfect match", link: "/roommate-finder" },
];

export default function FeaturesPreview() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What You Can Do 💡</h2>
      <div className="grid gap-6 md:grid-cols-3 px-4 md:px-20">
        {features.map((f, idx) => (
          <Link to={f.link} key={idx}>
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all text-center hover:bg-blue-50">
              <div className="text-4xl mb-2">{f.emoji}</div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
