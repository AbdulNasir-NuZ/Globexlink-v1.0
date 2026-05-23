import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import { Link } from "react-router-dom";
import {
  Shield,
  CreditCard,
  Truck,
  Users,
  FileCheck,
  TrendingUp,
  Lock,
  BarChart3,
  Bell,
  History,
  ArrowRight,
  Globe,
} from "lucide-react";

const platformFeatures = [
  {
    icon: Shield,
    title: "Escrow Trade Flow",
    description: "Create, manage, and track escrow-protected trades from a unified dashboard. Full visibility at every stage.",
  },
  {
    icon: CreditCard,
    title: "Payments & FX Locking",
    description: "Multi-currency payments with real-time FX rate locking. Protect your margins from currency volatility.",
  },
  {
    icon: Truck,
    title: "Shipment & Proof Tracking",
    description: "GPS-enabled logistics tracking with photo documentation. Know exactly where your goods are at all times.",
  },
  {
    icon: Users,
    title: "Role-Based Dashboards",
    description: "Customized views for buyers, sellers, and logistics partners. See only what's relevant to your role.",
  },
  {
    icon: FileCheck,
    title: "Dispute Management",
    description: "Structured escalation process with professional mediation. Resolve issues fairly and efficiently.",
  },
  {
    icon: History,
    title: "Compliance & Audit Logs",
    description: "Complete transaction history with exportable reports. Meet regulatory requirements with confidence.",
  },
];

const Platform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              The Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              The Escrow & Settlement Platform for Global Trade
            </h1>
            <p className="text-xl text-slate-600 mb-8 animate-fade-up delay-200">
              A unified platform that brings together payments, logistics, verification, and dispute resolution into one seamless experience.
            </p>
            <Button variant="hero" size="xl" asChild className="animate-fade-up delay-300">
              <Link to="/contact">
                Request Platform Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader
            badge="Core Features"
            title="Everything You Need to Trade Globally"
            subtitle="A comprehensive platform built for the unique challenges of emerging market B2B trade"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeader
            badge="Dashboard Preview"
            title="Intuitive Interface for Every Role"
            subtitle="Clean, role-based dashboards that surface the information you need, when you need it"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Buyer Dashboard",
                icon: Users,
                features: ["Active trades overview", "Payment status tracking", "Delivery timeline", "Document access"],
              },
              {
                title: "Seller Dashboard",
                icon: BarChart3,
                features: ["Order management", "Shipment coordination", "Payment receipts", "Buyer communications"],
              },
              {
                title: "Admin Dashboard",
                icon: Lock,
                features: ["User verification queue", "Dispute management", "Analytics & reports", "System configuration"],
              },
            ].map((dashboard, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-slate-100 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <dashboard.icon className="w-5 h-5 text-slate-800" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{dashboard.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {dashboard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Light Mention */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              Enterprise Grade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Modern, Secure Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Our platform leverages enterprise-grade technology to ensure security, scalability, and reliability for your global trade operations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Lock, label: "End-to-End Encryption" },
                { icon: Globe, label: "Global CDN" },
                { icon: TrendingUp, label: "99.9% Uptime" },
                { icon: Bell, label: "Real-time Notifications" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-full transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                >
                  <item.icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
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
            See the Platform in Action
          </h2>
          <p className="text-slate-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how GlobexLink can transform your trade operations.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;




