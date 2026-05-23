import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#042f34] text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/GlobxLink_Logo.svg" alt="GlobxLink logo" className="h-14 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Connecting global markets with trusted logistics solutions across Turkey, China, and Africa.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Istanbul, Turkey</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+90 (212) 555-0123</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>hello@globexlink.com</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">SITE PAGES</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/trust" className="hover:text-white transition-colors">Trust & Compliance</Link></li>
              <li><Link to="/trust" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/trust" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">STAY INFORMED</h4>
            <p className="text-sm text-white/70 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <div className="flex gap-3 mt-6">
              <a href="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/55">
          <p>© {new Date().getFullYear()} GlobexLink. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/trust" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/trust" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/trust" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
