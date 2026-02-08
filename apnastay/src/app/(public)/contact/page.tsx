import Card3D from "@/components/ui/Card3D";

export default function ContactPage() {
  return (
    <section className="py-24 bg-soft">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <h1 className="text-3xl font-semibold">Contact Us</h1>

        <Card3D>
          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" placeholder="Message" />
          <button className="px-6 py-3 rounded-xl text-white bg-gradient">
            Send Message
          </button>
        </Card3D>

        <p className="text-sm text-[var(--text-secondary)]">
          Pune, Maharashtra · +91 XXXXX XXXXX
        </p>
      </div>
    </section>
  );
}
