export default function Slide6() {
  return (
    <div>
      <h2 className="text-5xl font-black text-emerald-400 mb-8">
        Which One Should You Use?
      </h2>

      <ul className="space-y-4 text-lg text-gray-300">
        <li>Hash password → Document → pre('save')</li>
        <li>Auto-populate → Query → pre('find')</li>
        <li>Soft delete filter → Query → pre('find')</li>
        <li>Validation → Document → pre('validate')</li>
      </ul>
    </div>
  );
}
