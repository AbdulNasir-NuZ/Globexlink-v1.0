import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/shared/ContactForm";
import heroGlobe from "@/assets/hero-globe.jpg";
import worldMap from "@/assets/world-map-corridors.jpg";
import { Gem, Shirt, Cog, Wheat, Pill, Armchair, Plane, FileCheck2, Truck, Languages, BriefcaseBusiness } from "lucide-react";

const Index = () => {
  const categories = [
    { icon: Pill, label: "Medical" },
    { icon: Gem, label: "Metals" },
    { icon: Cog, label: "Electronics" },
    { icon: Armchair, label: "Furniture" },
    { icon: Shirt, label: "Textiles" },
    { icon: Wheat, label: "Dried Fruits" },
  ];

  const services = [
    {
      icon: Plane,
      title: "Import Services",
      description: "Source premium goods worldwide with customs handling and compliance assurance.",
      features: ["Global Sourcing", "Quality Control", "Customs Clearance", "Documentation"],
    },
    {
      icon: FileCheck2,
      title: "Export Services",
      description: "Expand market reach through efficient outbound logistics and complete export support.",
      features: ["Market Analysis", "Export Documentation", "Shipping Solutions", "Compliance Management"],
    },
    {
      icon: Truck,
      title: "Logistics & Documentation",
      description: "End-to-end shipping, customs clearance, and trade compliance for seamless operations.",
      features: ["Supply Chain Management", "Trade Finance", "Risk Management", "Digital Tracking"],
    },
  ];

  const expertise = [
    {
      icon: Languages,
      title: "Languages Spoken",
      description: "Our team is fluent across multiple languages for global collaboration.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Years of Experience",
      description: "We have been serving this industry for over 6 years.",
    },
    {
      icon: Plane,
      title: "Relationship Driven",
      description: "We build long-term partnerships with distributors and suppliers.",
    },
    {
      icon: Truck,
      title: "Complete Transparency",
      description: "Detailed logistics analytics help you track every shipment and cost.",
    },
  ];

  return (
    <Layout>
      <section className="relative min-h-[86vh] flex items-center bg-[#d8e9fb] overflow-hidden pt-20">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold text-slate-800 leading-[1.05]">
                B2B Logistics
                <br />
                Connecting Turkey,
                <br />
                China, and Africa
              </h1>
              <p className="text-slate-600 text-base max-w-lg">
                Connecting markets worldwide through seamless import-export services and comprehensive logistics support.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6">Buy and Sell B2B goods</Button>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">Our Services</Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
                <img src={heroGlobe} alt="Global trade network" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f6fb]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">Bulk B2B Purchasing via Our Marketplace</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Buy from trusted buyers and suppliers verified by our team.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-md bg-indigo-50 flex items-center justify-center"><cat.icon className="w-4 h-4 text-indigo-400" /></div>
                <span className="text-slate-700 font-medium text-sm">{cat.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View our marketplace</Button></div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f6fb]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We excel at moving industry-grade shipments across the world.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center mb-4"><service.icon className="w-4 h-4 text-indigo-400" /></div>
                <h3 className="text-lg font-bold text-slate-700 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1.5 list-disc pl-5 marker:text-slate-500">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View our services</Button></div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f6fb]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">Countries We Service</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">GlobexLink network connects Turkey, Africa, and China.</p>
          </div>

          <div className="relative max-w-5xl mx-auto bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <img src={worldMap} alt="World map showing trade corridors" className="w-full h-full object-contain opacity-90" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f6fb]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">Real Expertise, Real Relationships</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Trusted relationships with buyers, suppliers, and logistics partners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4">
                <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center shrink-0"><item.icon className="w-4 h-4 text-indigo-400" /></div>
                <div>
                  <h3 className="font-semibold text-slate-700 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10"><Button className="bg-slate-900 hover:bg-slate-800 text-white">Meet our team</Button></div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f6fb]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">Get In Touch</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Ready to expand your global reach?</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

