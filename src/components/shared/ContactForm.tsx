import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Send us a Message</h3>
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <Input placeholder="Your full name" className="h-10 bg-white border-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
              <Input type="email" placeholder="you@mail.com" className="h-10 bg-white border-slate-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
            <Input placeholder="What is this about?" className="h-10 bg-white border-slate-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
            <Textarea placeholder="Tell us about your requirements" className="min-h-[110px] resize-none bg-white border-slate-300" />
          </div>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-10">Send Message</Button>
        </form>
      </div>

      <div className="space-y-4">
        <div className="p-5 bg-white rounded-xl border border-slate-200 flex gap-3">
          <Building2 className="w-5 h-5 text-slate-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Global Headquarters</h4>
            <p className="text-slate-600 text-sm">123 International Trade Center, Levent, Istanbul, Turkey</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 flex gap-3">
          <Mail className="w-5 h-5 text-slate-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
            <p className="text-slate-600 text-sm">support@globexlink.com</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 flex gap-3">
          <Phone className="w-5 h-5 text-slate-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
            <p className="text-slate-600 text-sm">+90 212 555 47 56</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 flex gap-3">
          <Clock className="w-5 h-5 text-slate-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
            <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-slate-600 text-sm">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
