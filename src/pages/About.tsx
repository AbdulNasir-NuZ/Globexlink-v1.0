import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import StatBadge from "@/components/shared/StatBadge";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Handshake,
  Globe,
  TrendingUp,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Trust",
    description: "Trust is the foundation of every transaction. We build systems that make trust verifiable, not assumed.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Every participant sees exactly what's happening at every stage. No hidden fees, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Empowerment",
    description: "We give SMEs the tools and confidence to compete in global markets previously dominated by large players.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our platform based on real-world trade challenges in emerging markets.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We succeed when our users succeed. Every feature is designed to help you trade more profitably.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              Building Trust Across Emerging Markets
            </h1>
            <p className="text-xl text-slate-600 animate-fade-up delay-200">
              We're on a mission to eliminate trust barriers and enable SMEs to trade directly, safely, and profitably across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                A world where SMEs in Turkey, Africa, and China trade directly, safely, and profitably - without the fear, friction, or middleman markups that have historically held them back.
              </p>
            </div>

            {/* Mission */}
            <div className="animate-fade-up delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To provide the trust infrastructure that emerging market businesses need to engage in global trade - through rigorous verification, escrow-based payments, and complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Turkey-Africa-China */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeader
            badge="Our Focus"
            title="Why Turkey, Africa & China?"
            subtitle="These corridors represent some of the fastest-growing and most underserved trade routes in the world"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "Turkey",
                description: "A strategic bridge between Europe, Asia, and Africa. Turkish exporters are seeking direct access to African markets without relying on intermediaries.",
                stats: "18 Turkish exporters in beta",
              },
              {
                region: "Africa",
                description: "The AfCFTA creates a 1.4B person market. SMEs across Kenya, Tanzania, Nigeria, and beyond need secure channels to import quality goods.",
                stats: "1.4B market access potential",
              },
              {
                region: "China",
                description: "The world's manufacturing hub. African and Turkish businesses need verified suppliers and payment security to source directly from Chinese factories.",
                stats: "$375B annual trade market",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Globe className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.region}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  {item.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader
            badge="What Drives Us"
            title="Our Values"
            subtitle="The principles that guide every decision we make and every feature we build"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-card border border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Partnerships */}
      <section className="section-padding bg-[#f2f6fb]">
        <div className="section-container">
          <SectionHeader
            badge="Traction"
            title="Where We Are Today"
            subtitle="Building momentum with early partners and users across our corridors"/>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatBadge value="73" label="SMEs Pre-Registered" delay={0} />
            <StatBadge value="18" label="Turkish Exporters" delay={100} />
            <StatBadge value="3" label="Trade Corridors" delay={200} />
            <StatBadge value="2" label="MoUs Signed" delay={300} />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <Building2 className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Strategic Partnerships</h3>
              <p className="text-slate-600 mb-6">
                We're building strategic relationships with trade chambers, logistics providers, and financial institutions across our operating corridors.
              </p>
              <ul className="flex flex-wrap justify-center gap-3">
                {["Trade Chambers", "Inspection Bodies", "Logistics Partners", "Financial Institutions"].map((partner) => (
                  <li
                    key={partner}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700"
                  >
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f2f6fb]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-slate-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're an SME, trade chamber, or investor - there's a place for you in the GlobexLink ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;




