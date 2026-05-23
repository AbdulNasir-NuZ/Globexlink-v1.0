interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ badge, title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          light
            ? "bg-white/10 text-white/80"
            : "bg-indigo-50 text-slate-600"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-white" : "text-slate-700"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${
          light ? "text-white/70" : "text-slate-500"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
