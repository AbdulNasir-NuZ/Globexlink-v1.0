import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import {
  UserCheck,
  FileText,
  CreditCard,
  Truck,
  CheckCircle,
  DollarSign,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Verify Buyer & Supplier",
    description: "Both parties undergo our comprehensive verification process including video calls, chamber certificates, trade references, and financial health screening.",
    details: ["Video verification call", "Chamber of commerce check", "Trade reference validation", "Financial health assessment"],
  },
  {
    number: "02",
    icon: FileText,
    title: "Create Escrow Trade",
    description: "Define trade terms, product specifications, inspection requirements, and payment milestones. Our system generates a secure, legally-binding trade agreement.",
    details: ["Product specifications", "Quality requirements", "Delivery timeline", "Payment milestones"],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Buyer Funds Escrow",
    description: "The buyer deposits 30% to initiate the trade. FX rates are locked at this moment, protecting both parties from currency fluctuations throughout the transaction.",
    details: ["30% initial deposit", "FX rate locked", "Funds held securely", "Multi-currency support"],
  },
  {
    number: "04",
    icon: Truck,
    title: "Shipment Tracked Real-Time",
    description: "Once production begins, track your shipment from factory to destination. Receive real-time updates at every milestone with GPS-enabled logistics partners.",
    details: ["Factory departure", "Port loading", "Customs clearance", "Final delivery"],
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Proof Verified",
    description: "Upon arrival, delivery is verified through photos, signatures, and inspection reports. Our quality assurance team validates all documentation before final settlement.",
    details: ["Delivery confirmation", "Photo documentation", "Quality inspection", "Certificate validation"],
  },
  {
    number: "06",
    icon: DollarSign,
    title: "Funds Released",
    description: "Once all verifications are complete, the remaining 70% is released to the supplier. Transaction complete with full audit trail for both parties.",
    details: ["Balance released", "Transaction complete", "Audit trail generated", "Rating exchange"],
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              Step by Step
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              How GlobexLink Works
            </h1>
            <p className="text-xl text-slate-600 animate-fade-up delay-200">
              From verified partners to secure settlement - a transparent process designed to eliminate trade barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-28 w-0.5 h-16 bg-gradient-to-b from-secondary/50 to-transparent hidden md:block" />
                )}

                <div
                  className="flex gap-6 md:gap-8 mb-12 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                      <step.icon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="text-center mt-2 text-sm font-bold text-muted-foreground">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-8 md:hidden">
                    <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#f2f6fb]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-slate-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Experience the future of secure international trade. Get started with GlobexLink today.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Start a Secure Trade
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;




