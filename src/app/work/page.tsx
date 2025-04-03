"use client";

import React, { useState } from "react";
import { workInfo } from "./WorkInfo";
import useIsMobile from "@/hooks/useIsMobile";
import WorkTile from "./WorkTile";
import ExpandedWorkItem from "./ExpandedWorkItem";
import { motion, AnimatePresence } from 'framer-motion';

// Define animation variants
const workItemVariants = {
    open: {
        opacity: 1,
        height: 'auto',
        marginTop: 15, // Keep the margin when open
        transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
    },
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0, // Remove margin when collapsed
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    }
};

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
          // Use AnimatePresence to handle mount/unmount animations
          <AnimatePresence initial={false} key={`${item.name}-presence`}>
            {isSelected && (
              <motion.div
                key={`${item.name}-expanded`} // Unique key for framer-motion tracking
                variants={workItemVariants}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                style={{
                    gridColumn: `span ${columns}`,
                    overflow: 'hidden' // Prevent content spill during animation
                }}
              >
                <ExpandedWorkItem
                  item={item}
                  onClose={() => handleTileClick(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ];
      })}
    </div>
  );
};

export default Work;
