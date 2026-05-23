import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Package,
  Truck,
  Building2,
  Shield,
  CheckCircle,
  DollarSign,
  Globe,
  ArrowRight,
  Users,
  FileCheck,
  Clock,
} from "lucide-react";

const solutions = [
  {
    id: "buyers",
    icon: ShoppingBag,
    title: "For Buyers",
    subtitle: "Import with Confidence",
    description: "Secure your payments and protect your investment throughout the entire trade journey. Never worry about losing money to unreliable suppliers again.",
    benefits: [
      {
        icon: Shield,
        title: "Payment Protection",
        description: "Your funds stay in escrow until goods are verified and delivered",
      },
      {
        icon: CheckCircle,
        title: "Quality Assurance",
        description: "Independent inspections before shipment protects your interests",
      },
      {
        icon: Clock,
        title: "Clear Timelines",
        description: "Defined milestones and real-time tracking keep you informed",
      },
      {
        icon: DollarSign,
        title: "FX Protection",
        description: "Lock rates at trade creation to eliminate currency risk",
      },
    ],
  },
  {
    id: "suppliers",
    icon: Package,
    title: "For Suppliers",
    subtitle: "Get Paid with Certainty",
    description: "Receive guaranteed payment upon delivery. No more chasing invoices or worrying about buyer defaults. Focus on what you do best - producing quality goods.",
    benefits: [
      {
        icon: DollarSign,
        title: "Guaranteed Release",
        description: "Funds are released automatically upon verified delivery",
      },
      {
        icon: Users,
        title: "Verified Buyers",
        description: "Trade only with pre-verified, financially qualified buyers",
      },
      {
        icon: FileCheck,
        title: "Clear Documentation",
        description: "Standardized trade documents reduce disputes and delays",
      },
      {
        icon: Globe,
        title: "Market Access",
        description: "Connect with buyers across our Turkey-Africa-China corridors",
      },
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "For Logistics Partners",
    subtitle: "Streamlined Settlement",
    description: "Integrate with our shipment-triggered settlement system. Provide proof of delivery and enable automatic payment release for faster, more reliable trade flows.",
    benefits: [
      {
        icon: CheckCircle,
        title: "Proof Integration",
        description: "Your delivery confirmation triggers payment settlement",
      },
      {
        icon: Clock,
        title: "Real-Time Tracking",
        description: "GPS integration keeps all parties informed on shipment status",
      },
      {
        icon: FileCheck,
        title: "Documentation",
        description: "Digital proof of delivery eliminates paperwork delays",
      },
      {
        icon: Users,
        title: "Partner Network",
        description: "Join our growing network of trusted logistics providers",
      },
    ],
  },
  {
    id: "chambers",
    icon: Building2,
    title: "For Trade Chambers",
    subtitle: "Verified Trade Ecosystem",
    description: "Help your member businesses access secure international trade. Provide value-added verification services and strengthen your chamber's role in global commerce.",
    benefits: [
      {
        icon: Shield,
        title: "Member Verification",
        description: "Provide trusted verification for your member businesses",
      },
      {
        icon: Globe,
        title: "International Reach",
        description: "Connect members to verified partners across our corridors",
      },
      {
        icon: FileCheck,
        title: "Certification",
        description: "Chamber certificates integrated into verification process",
      },
      {
        icon: Users,
        title: "Member Value",
        description: "Add tangible value to chamber membership through trade access",
      },
    ],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              Tailored Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              Built for SMEs, Exporters & Trade Partners
            </h1>
            <p className="text-xl text-slate-600 animate-fade-up delay-200">
              Whether you're buying, selling, shipping, or facilitating - GlobexLink has the tools you need to succeed in cross-border trade.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{solution.title}</h2>
                    <p className="text-secondary font-semibold">{solution.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-8">{solution.description}</p>
                <Button variant="teal" size="lg" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Benefits Grid */}
              <div className={`grid sm:grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {solution.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-slate-200 animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center mb-3">
                      <benefit.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-[#f2f6fb]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Find Your Solution
          </h2>
          <p className="text-slate-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your role and trade needs. We'll show you exactly how GlobexLink can help.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;




