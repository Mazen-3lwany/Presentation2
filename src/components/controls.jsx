export default function Controls({
  currentSlide,
  totalSlides,
  nextSlide,
  previousSlide,
}) {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-5 z-50">
      <button
        onClick={previousSlide}
        disabled={currentSlide === 1}
        className="btn"
      >
        ← Previous
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides}
        className="btn"
      >
        Next →
      </button>
    </div>
  );
}
