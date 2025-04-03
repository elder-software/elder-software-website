"use client";

import React, { useState } from "react";
import { workInfo } from "./WorkInfo";
import useIsMobile from "@/hooks/useIsMobile";
import WorkTile from "./WorkTile";
import ExpandedWorkItem from "./ExpandedWorkItem";

const Work: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedItemKey, setSelectedItemKey] = useState<string | null>(null);

  const handleTileClick = (key: string | null) => {
    setSelectedItemKey((prevKey) => (prevKey === key ? null : key));
  };

  const columns = isMobile ? 1 : 3;

  return (
    <div
      style={{
        margin: 15,
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "15px",
        alignItems: "start",
      }}
    >
      {workInfo.flatMap((item) => {
        const isSelected = selectedItemKey === item.name;
        // Determine if the tile should be dimmed (i.e., an item is selected, but it's not this one)
        const isDimmed = selectedItemKey !== null && !isSelected;

        return [
          <WorkTile
            key={item.name}
            name={item.name}
            icon={item.icon}
            onClick={() => handleTileClick(item.name)}
            isSelected={isSelected}
            isDimmed={isDimmed}
          />,
          isSelected && (
            <div
              key={`${item.name}-expanded`}
              style={{ gridColumn: `span ${columns}` }}
            >
              <ExpandedWorkItem
                item={item}
                onClose={() => handleTileClick(null)}
              />
            </div>
          ),
        ];
      })}
    </div>
  );
};

export default Work;
