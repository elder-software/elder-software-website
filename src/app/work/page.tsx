"use client"

import React from "react";
import WorkRow from "./WorkRow";
import { workInfo } from "./WorkInfo";
import useIsMobile from "@/hooks/useIsMobile";

const Work: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        margin: 15,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: "15px",
      }}
    >
      {workInfo.map((item) => (
        <WorkRow
          key={item.name}
          name={item.name}
          icon={item.icon}
          technologies={item.technologies}
          keyDetails={item.keyDetails}
          description={item.description}
          screenshots={item.screenshots}
          testimonial={item.testimonial}
          testimonialAuthor={item.testimonialAuthor}
        />
      ))}
    </div>
  );
};

export default Work;
