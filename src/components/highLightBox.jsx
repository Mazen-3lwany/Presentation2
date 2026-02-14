export default function HighlightBox({ children, variant = "default" }) {
  const variants = {
    default: "bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-400/30",
    info: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-400/30",
    warning: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-400/30",
    success: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400/30",
  };

  return (
    <div
      className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${
        variants[variant]
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-400/20 rounded-tl-2xl pointer-events-none"></div>
    </div>
  );
}