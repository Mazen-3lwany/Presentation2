export default function SlideContainer({ slides, currentSlide }) {
  return (
    <div className="relative w-full max-w-6xl h-[85vh] bg-gray-900/80 backdrop-blur-xl border border-emerald-400/20 rounded-3xl shadow-2xl p-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-16 transition-all duration-500 ease-out ${
            index + 1 === currentSlide
              ? "opacity-100 translate-x-0 z-10"
              : index + 1 < currentSlide
              ? "opacity-0 -translate-x-24 z-0"
              : "opacity-0 translate-x-24 z-0"
          }`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}
