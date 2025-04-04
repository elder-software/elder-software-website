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
      className="relative grid grid-cols-[1fr_2fr] items-start gap-8 rounded-lg border border-gray-200 bg-white p-8 shadow-lg"
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
            width={50}
            height={50}
          />
          <h2 className="m-0 text-[1.8em]">{item.name}</h2>
        </div>

        <div>
          <h4
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1"
          >
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-gray-400 px-3 py-1 text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1"
          >
            Key Details
          </h4>
          <ul className="m-0 list-disc pl-5">
            {item.keyDetails.map((detail) => (
              <li key={detail} className="mb-1">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {item.testimonial && (
          <div
            className="mt-4 border-l-1 border-gray-200 pl-4 italic"
          >
            <p className="m-0">&quot;{item.testimonial}&quot;</p>
            {item.testimonialAuthor && (
              <p
                className="mt-1 text-right font-bold"
              >
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
            className="mb-2.5 mt-0 border-b border-gray-200 pb-1"
          >
            Description
          </h4>
          <p className="m-0 leading-relaxed">{item.description}</p>
        </div>

        {item.screenshots && item.screenshots.length > 0 && (
          <div>
            <h4
              className="mb-4 mt-0 border-b border-gray-200 pb-1"
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
