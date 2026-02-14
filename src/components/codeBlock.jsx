export default function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 p-6 rounded-xl border-l-4 border-emerald-400 overflow-x-auto my-5 font-mono text-sm leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}
