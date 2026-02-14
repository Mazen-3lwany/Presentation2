export default function Controls({ currentSlide, totalSlides, nextSlide, prevSlide }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
      {/* Previous button */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
          currentSlide === 0
            ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
            : "bg-linear-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5"
        }`}
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </span>
      </button>

      {/* Slide counter */}
      <div className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl">
        <span className="text-sm font-mono">
          <span className="text-emerald-400 font-bold">{currentSlide + 1}</span>
          <span className="text-gray-500 mx-2">/</span>
          <span className="text-gray-400">{totalSlides}</span>
        </span>
      </div>

      {/* Next button */}
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
          currentSlide === totalSlides - 1
            ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
            : "bg-linear-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-0.5"
        }`}
      >
        <span className="flex items-center gap-2">
          Next
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}