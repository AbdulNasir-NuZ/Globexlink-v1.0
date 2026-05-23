interface StatBadgeProps {
  value: string;
  label: string;
  delay?: number;
}

const StatBadge = ({ value, label, delay = 0 }: StatBadgeProps) => {
  return (
    <div
      className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-card-lg border border-border/50 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatBadge;
