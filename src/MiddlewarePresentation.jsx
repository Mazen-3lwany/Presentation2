import React, { useState } from "react";
import SlideContainer from "./components/slideContainer";
import Controls from "./components/controls";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";

const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
];

function MiddlewarePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">

    
    <SlideContainer slides={slides} currentSlide={currentSlide}>
      {slides[currentSlide]}

      <Controls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </SlideContainer>
    </div>
  );
}

export default MiddlewarePresentation;