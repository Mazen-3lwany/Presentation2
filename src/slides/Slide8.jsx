import HighlightBox from "../components/highLightBox";

export default function Slide8() {
  return (
    <div>
      <h2 className="text-5xl font-black text-emerald-400 mb-8">
        Key Takeaways
      </h2>

      <HighlightBox>
        <p className="text-xl text-gray-300">
          <strong>Query</strong> = operates on query objects
          <br />
          <strong>Document</strong> = operates on document instances
        </p>
      </HighlightBox>

      <p className="text-center mt-12 text-2xl text-emerald-400 font-bold">
        Choose based on WHAT you're working with 🚀
      </p>
    </div>
  );
}
