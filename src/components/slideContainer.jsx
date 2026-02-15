export default function SlideContainer({ slides, currentSlide, children }) {
  return (
    <div className="relative w-full max-w-6xl h-[85vh] bg-linear-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl border border-emerald-400/30 rounded-3xl shadow-2xl overflow-hidden group">
      {/* Animated border glow effect */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-400/0 via-emerald-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none rounded-3xl"></div>
      
      {/* Slide number indicator */}
      <div className="absolute top-6 right-8 z-20 px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-emerald-400/30 rounded-full">
        <span className="text-sm font-semibold text-emerald-400">
          {currentSlide + 1}
        </span>
        <span className="text-sm text-gray-400 mx-1">/</span>
        <span className="text-sm text-gray-400">{slides.length}</span>
      </div>

      {/* Slides container */}
      <div className="relative w-full h-full p-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 p-16 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : index < currentSlide
                ? "opacity-0 -translate-x-32 scale-95 z-0"
                : "opacity-0 translate-x-32 scale-95 z-0"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          >
            <div className={`h-full transition-all duration-700 delay-100 ${
              index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {slide}
            </div>
          </div>
        ))}
      </div>

      {/* Children (Controls) */}
      {children}

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-emerald-400/20 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/20 rounded-br-3xl pointer-events-none"></div>
    </div>
  );
}