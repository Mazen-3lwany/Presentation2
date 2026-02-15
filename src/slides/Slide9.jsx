import HighlightBox from "../components/highLightBox";

export default function Slide9() {
  return (
    <div className="h-3/4 flex justify-center items-center flex-col">
      <h2 className="text-8xl font-black text-emerald-400 mb-8">
        Thank You!
      </h2>

      <HighlightBox>
        <p className="text-xl text-gray-300">
          <strong>Presented By :</strong> <span className="text-emerald-400">Mazen Elwany</span> 
          <br />
          
        </p>
      </HighlightBox>
    </div>
  );
}
