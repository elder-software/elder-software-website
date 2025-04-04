import React, { useState, useRef, useEffect, PointerEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add react-icons

interface CarouselProps {
  children: React.ReactNode[];
  width?: string;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  width = "w-[300px]",
  height = "h-auto",
}) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = children.length;
  const swipeThreshold = 50; // Min pixels to swipe to change slide

  const next = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!ref.current) return;
    if (isDragging) {
      // Apply drag offset without transition during drag
      ref.current.style.transition = "none";
      ref.current.style.transform = `translateX(calc(-${current * 100}% + ${dragOffset}px))`;
    } else {
      // Apply final position with transition
      ref.current.style.transition = "transform 0.5s ease-in-out";
      ref.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current, isDragging, dragOffset]);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Check if the event originated from a button or an indicator dot
    const targetElement = e.target as Element;
    if (targetElement.closest('button')) {
      // If the pointer down is on a button, don't initiate drag
      // Allow the button's onClick to handle the event
      return;
    }

    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0); // Reset offset
    // Capture pointer events on the container to track movement outside the initial element
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const offset = currentX - startX;
    setDragOffset(offset);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    containerRef.current?.releasePointerCapture(e.pointerId);
    setIsDragging(false);

    if (Math.abs(dragOffset) > swipeThreshold) {
      if (dragOffset < 0) {
        next();
      } else {
        prev();
      }
    } else {
       // If swipe is not enough, snap back to current slide
       if (ref.current) {
         ref.current.style.transition = "transform 0.3s ease-out"; // Smooth snap back
         ref.current.style.transform = `translateX(-${current * 100}%)`;
       }
    }

    setDragOffset(0); // Reset offset after action
  };

   const handlePointerLeave = (e: PointerEvent<HTMLDivElement>) => {
     // Treat leaving the area the same as pointer up if dragging
     if (isDragging) {
       handlePointerUp(e);
     }
   };

  // Prevent default image dragging behavior
  const preventDefault = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div
      ref={containerRef}
      className={`relative ${width} mx-auto my-4 touch-pan-y`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerUp}
      onDragStart={preventDefault}
    >
      <div className={`${height} overflow-hidden rounded-lg shadow-md cursor-grab active:cursor-grabbing`}>
        <div
          className="flex whitespace-nowrap"
          ref={ref}
        >
          {children.map((child, index) => (
            <div className="inline-block w-full flex-shrink-0" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full focus:outline-none transition-opacity duration-200 z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full focus:outline-none transition-opacity duration-200 z-10"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              current === index
                ? "bg-white"
                : "bg-white bg-opacity-40 hover:bg-opacity-60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
