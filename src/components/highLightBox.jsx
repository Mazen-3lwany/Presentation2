export default function HighlightBox({ children, variant = "default" }) {
  const borderColor =
    variant === "danger" ? "border-pink-500" : "border-emerald-400";
  const bgColor =
    variant === "danger" ? "bg-pink-500/10" : "bg-emerald-400/10";

  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-5 my-5 rounded-lg`}>
      {children}
    </div>
  );
}
