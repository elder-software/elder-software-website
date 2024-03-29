import React from 'react';
import './carousel.css';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [current, setCurrent] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const next = () => {
    if (current >= children.length - 1) return;
    else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  React.useEffect(() => {
    if (ref.current === null) return;
    ref.current.style.transition = 'all 0.2s ease-in-out';
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <div className="main-container">
      <div className="button" onClick={prev}>
        {'<'}
      </div>
      <div className="frame">
        <div className="box-container" ref={ref}>
          {children.map((child, index) => (
            <div className="box" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="button" onClick={next}>
        {'>'}
      </div>
    </div>
  );
};

export default Carousel;
