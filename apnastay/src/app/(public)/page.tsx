import Card3D from "@/components/ui/Card3D";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient)", opacity: 0.08 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Premium Living for <br />
            <span className="bg-gradient bg-clip-text text-transparent">
              Working Professionals
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Professionally managed PGs designed for comfort, calm, and consistency.
          </p>
          <Link
            href="/explore"
            className="inline-block mt-12 px-8 py-4 rounded-2xl text-white bg-gradient shadow-lg hover:shadow-xl transition"
          >
            Explore PGs
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-soft py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {["Professionally Managed", "Prime Locations", "Transparent Living"].map(
            (t) => (
              <Card3D key={t}>
                <h3 className="text-lg font-medium">{t}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Built exclusively for working professionals.
                </p>
              </Card3D>
            )
          )}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Featured PGs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <Card3D key={id}>
                <h3 className="font-medium">APNASTAY Baner</h3>
                <p className="text-sm text-[var(--text-secondary)]">Pune</p>
                <Link
                  href={`/pg/${id}`}
                  className="inline-block mt-4 text-[var(--orange)]"
                >
                  View Details →
                </Link>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
