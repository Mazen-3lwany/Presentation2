export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-gray-900 border-2 border-transparent hover:border-emerald-400 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      {children}
    </div>
  );
}
