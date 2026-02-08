import Card3D from "@/components/ui/Card3D";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <section className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-12">Explore PGs</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <Card3D key={id}>
              <h3 className="font-medium">APNASTAY Premium PG</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Baner, Pune
              </p>
              <p className="mt-2 font-medium">₹9,500 / month</p>
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
  );
}
