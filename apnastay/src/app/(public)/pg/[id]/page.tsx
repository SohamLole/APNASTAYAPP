import Card3D from "@/components/ui/Card3D";

export default function PGDetailPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div>
          <h1 className="text-3xl font-semibold">APNASTAY Baner</h1>
          <p className="text-[var(--text-secondary)]">Baner, Pune</p>
        </div>

        <Card3D>
          <h2 className="font-medium mb-2">Amenities</h2>
          <ul className="list-disc pl-5 text-sm text-[var(--text-secondary)] space-y-1">
            <li>Fully Furnished</li>
            <li>High-speed WiFi</li>
            <li>Housekeeping</li>
            <li>24×7 Security</li>
          </ul>
        </Card3D>

        <Card3D>
          <h2 className="font-medium mb-2">Pricing</h2>
          <p className="text-xl font-semibold">₹9,500 / month</p>
        </Card3D>

        <button className="px-8 py-4 rounded-2xl text-white bg-gradient shadow-lg hover:shadow-xl transition">
          Enquire Now
        </button>
      </div>
    </section>
  );
}
