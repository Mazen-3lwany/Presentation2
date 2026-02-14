import HighlightBox from "../components/highLightBox";

export default function Slide1() {
  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-7xl font-black bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-5 tracking-tight">
        Query vs Document
        <br />
        Middleware
      </h1>

      <p className="text-2xl text-gray-400 mb-12">
        Understanding Mongoose Middleware Patterns
      </p>

      <HighlightBox>
        <p className="text-lg text-gray-300">
          <strong className="text-white">Key Concept:</strong> Middleware
          allows you to execute logic before or after certain operations.
        </p>
      </HighlightBox>
    </div>
  );
}
