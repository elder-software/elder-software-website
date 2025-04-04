import React from "react";
import Image from "next/image";
import Carousel from "./carousel/Carousel";

interface WorkItem {
  name: string;
  icon: string;
  technologies: string[];
  keyDetails: string[];
  description: string;
  screenshots: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

interface ExpandedWorkItemProps {
  item: WorkItem;
  onClose: () => void;
}

const ExpandedWorkItem: React.FC<ExpandedWorkItemProps> = ({
  item,
  onClose,
}) => {
  return (
    <div
      className="relative flex flex-col md:grid md:grid-cols-[1fr_2fr] items-start gap-4 md:gap-8 rounded-lg border border-gray-200 bg-white p-4 md:p-8 shadow-lg"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 cursor-pointer border-none bg-transparent text-2xl text-gray-500"
      >
        &times;
      </button>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
          <h2 className="m-0 text-xl md:text-[1.8em] font-semibold">
            {item.name}
          </h2>
        </div>

        <div>
          <h4
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1 text-base md:text-lg font-semibold"
          >
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-gray-400 px-3 py-1 text-xs sm:text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1 text-base md:text-lg font-semibold"
          >
            Key Details
          </h4>
          <ul className="m-0 list-disc pl-5">
            {item.keyDetails.map((detail) => (
              <li key={detail} className="mb-1 text-sm md:text-base">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {item.testimonial && (
          <div
            className="mt-4 border-l-2 border-gray-300 pl-4 italic"
          >
            <p className="m-0 text-sm md:text-base">
              &quot;{item.testimonial}&quot;
            </p>
            {item.testimonialAuthor && (
              <p className="mt-1 text-right text-sm md:text-base font-semibold">
                - {item.testimonialAuthor}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Right Column: Description and Screenshots */}
      <div className="flex flex-col gap-5">
        <div>
          <h4
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1 text-base md:text-lg font-semibold"
          >
            Description
          </h4>
          <p className="m-0 leading-relaxed text-sm md:text-base">
            {item.description}
          </p>
        </div>

        {item.screenshots && item.screenshots.length > 0 && (
          <div>
            <h4
              className="mb-4 mt-0 border-b border-gray-200 pb-1 text-base md:text-lg font-semibold"
            >
              Screenshots
            </h4>
            <Carousel>
              {item.screenshots.map((screenshotSrc, index) => (
                <Image
                  key={index}
                  src={screenshotSrc}
                  alt={`${item.name} screenshot ${index + 1}`}
                  width={500}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandedWorkItem;
