import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import {
  Shield,
  UserCheck,
  Lock,
  History,
  Scale,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Eye,
  Users,
  FileText,
} from "lucide-react";

const trustPillars = [
  {
    icon: UserCheck,
    title: "KYC & Organization Verification",
    description: "Every entity on our platform undergoes comprehensive verification before they can participate in trades.",
    details: [
      "Video verification calls with key personnel",
      "Chamber of commerce certificate validation",
      "Business registration verification",
      "Financial health and credit assessment",
      "Trade reference checks with previous partners",
    ],
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure that users only see and do what's relevant to their role in each transaction.",
    details: [
      "Buyer-specific dashboards and actions",
      "Seller document upload and management",
      "Logistics partner shipment updates",
      "Admin oversight and intervention tools",
      "Audit trail for all access events",
    ],
  },
  {
    icon: History,
    title: "Complete Audit Trails",
    description: "Every action, document, and status change is logged with timestamps for full transparency and compliance.",
    details: [
      "Immutable transaction history",
      "Document version tracking",
      "User action logging",
      "Exportable compliance reports",
      "Third-party audit support",
    ],
  },
];

const disputeSteps = [
  {
    step: "01",
    title: "Issue Raised",
    description: "Either party can flag an issue through the platform. The trade is paused, and escrow funds remain secured.",
  },
  {
    step: "02",
    title: "Evidence Collection",
    description: "Both parties submit documentation - photos, contracts, communications, inspection reports - through a structured process.",
  },
  {
    step: "03",
    title: "Review & Mediation",
    description: "Our dispute resolution team reviews all evidence and facilitates communication to reach a fair resolution.",
  },
  {
    step: "04",
    title: "Resolution",
    description: "A binding decision is made based on evidence and trade terms. Escrow funds are released according to the resolution.",
  },
];

const Trust = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              Trust & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              Trust Is Built, Not Assumed
            </h1>
            <p className="text-xl text-slate-600 animate-fade-up delay-200">
              Our multi-layered approach to verification, access control, and dispute resolution ensures secure, compliant trade at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader
            badge="Trust Foundation"
            title="Our Trust Pillars"
            subtitle="A comprehensive framework designed to protect all parties in every transaction"
          />

          <div className="space-y-8">
            {trustPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <pillar.icon className="w-7 h-7 text-indigo-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{pillar.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{pillar.description}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <ul className="space-y-3">
                      {pillar.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeader
            badge="Dispute Resolution"
            title="What Happens During a Dispute?"
            subtitle="A fair, structured process that protects both parties and leads to resolution"
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-start gap-4 mb-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                <p className="text-foreground">
                  <strong>Important:</strong> During any dispute, all escrow funds remain securely held. Neither party can access the funds until resolution is reached, ensuring fair treatment for everyone involved.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {disputeSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative p-6 bg-muted/50 rounded-xl animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-4xl font-bold text-secondary/20 absolute top-4 right-4">
                      {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Regulatory Compliance Built In
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              GlobexLink is designed to meet international trade regulations and compliance requirements across all our operating corridors.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "AML Compliance" },
                { icon: Eye, label: "KYC Standards" },
                { icon: FileText, label: "GDPR Aligned" },
                { icon: Users, label: "Sanctions Screening" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-muted rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f2f6fb]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trade with Complete Confidence
          </h2>
          <p className="text-slate-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing number of businesses who trust GlobexLink for their international trade operations.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Start Trading Securely
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;




