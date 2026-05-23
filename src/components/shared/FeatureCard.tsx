import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="group bg-white rounded-xl p-6 border border-slate-200 animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-indigo-100">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <h3 className="text-lg font-bold text-slate-700 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
