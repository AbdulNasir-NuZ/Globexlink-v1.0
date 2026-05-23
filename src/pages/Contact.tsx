import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Building2, Handshake } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#d8e9fb] overflow-hidden">
        <div className="absolute inset-0 hidden" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-semibold mb-6 animate-fade-up">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-up delay-100">
              Let's Talk Trade
            </h1>
            <p className="text-xl text-slate-600 animate-fade-up delay-200">
              Ready to transform your cross-border operations? Our team is here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Get a response within 24 hours</p>
                    <a href="mailto:hello@globexlink.com" className="text-secondary font-medium hover:underline">
                      hello@globexlink.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Mon-Fri, 9am-6pm (Istanbul)</p>
                    <a href="tel:+902125550123" className="text-secondary font-medium hover:underline">
                      +90 (212) 555-0123
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Levent Business Center<br />
                      Buyukdere Caddesi No: 185<br />
                      34394 Istanbul, Turkey
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Request a Demo</h2>
                    <p className="text-sm text-muted-foreground">See GlobexLink in action</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <Input placeholder="John" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <Input placeholder="Doe" className="h-12" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                      <Input type="email" placeholder="john@company.com" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                      <Input placeholder="Your Company" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">I am a *</label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">Buyer / Importer</SelectItem>
                          <SelectItem value="seller">Seller / Exporter</SelectItem>
                          <SelectItem value="logistics">Logistics Partner</SelectItem>
                          <SelectItem value="chamber">Trade Chamber</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">What are you looking to achieve?</label>
                    <Textarea placeholder="Tell us about your trade needs and what you'd like to learn about GlobexLink..." className="min-h-[120px] resize-none" />
                  </div>
                  <Button variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4" />
                    Request Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Partnership Inquiry</h2>
                  <p className="text-muted-foreground">For trade chambers, logistics providers, and strategic partners</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Organization Name *</label>
                    <Input placeholder="Your Organization" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Partnership Type *</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chamber">Trade Chamber</SelectItem>
                        <SelectItem value="logistics">Logistics Provider</SelectItem>
                        <SelectItem value="inspection">Inspection Body</SelectItem>
                        <SelectItem value="financial">Financial Institution</SelectItem>
                        <SelectItem value="technology">Technology Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Name *</label>
                    <Input placeholder="Your Name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Email *</label>
                    <Input type="email" placeholder="you@organization.com" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Partnership Proposal</label>
                  <Textarea placeholder="Describe how you'd like to partner with GlobexLink..." className="min-h-[120px] resize-none" />
                </div>
                <Button variant="teal" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Submit Partnership Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;




