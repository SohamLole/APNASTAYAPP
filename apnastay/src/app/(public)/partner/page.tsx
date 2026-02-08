import Card3D from "@/components/ui/Card3D";

export default function PartnerPage() {
  return (
    <section className="py-24 bg-soft">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <h1 className="text-3xl font-semibold">Partner With APNASTAY</h1>

        <p className="text-[var(--text-secondary)]">
          We manage your property end-to-end while you earn stable, predictable returns.
        </p>

        <Card3D>
          <h2 className="font-medium mb-4">Why Partner With Us</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
            <li>Zero vacancy stress</li>
            <li>Professional operations</li>
            <li>Verified working professionals</li>
          </ul>
        </Card3D>

        <Card3D>
          <h2 className="font-medium mb-4">Enquiry</h2>
          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Phone" />
          <button className="px-6 py-3 rounded-xl text-white bg-gradient">
            Submit
          </button>
        </Card3D>
      </div>
    </section>
  );
}
