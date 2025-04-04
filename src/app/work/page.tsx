"use client";

import React, { useState } from "react";
import { workInfo } from "./WorkInfo";
import useIsMobile from "@/hooks/useIsMobile";
import WorkTile from "./WorkTile";
import ExpandedWorkItem from "./ExpandedWorkItem";
import { motion, AnimatePresence } from "framer-motion";

// Define animation variants
const workItemVariants = {
  open: {
    opacity: 1,
    height: "auto",
    marginBottom: 16,
    transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    marginBottom: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

// Define animation variants for the grid container and items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Work: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedItemKey, setSelectedItemKey] = useState<string | null>(null);

  const handleTileClick = (key: string | null) => {
    setSelectedItemKey((prevKey) => (prevKey === key ? null : key));
  };

  const columns = isMobile ? 1 : 3;

  // Find the selected item data if a key is set
  const selectedItem = selectedItemKey
    ? workInfo.find((item) => item.name === selectedItemKey)
    : null;

  // Calculate grid position for the expanded item
  let gridRowStart = 2; // Default row start (e.g., after the first row)
  if (selectedItem) {
    const itemIndex = workInfo.findIndex(
      (item) => item.name === selectedItemKey
    );
    if (itemIndex !== -1) {
      gridRowStart = Math.floor(itemIndex / columns) + 2; // Place it in the row *after* the item's row
    }
  }

  return (
    <div
      className={`my-4 grid ${
        isMobile ? "grid-cols-1" : "grid-cols-3"
      } gap-x-3 items-start auto-rows-min`}
    >
      {/* Wrap the tiles mapping with motion.div for entry animation */}
      <motion.div
        className={`contents`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {workInfo.map((item) => {
          const isSelected = selectedItemKey === item.name;
          const isDimmed = selectedItemKey !== null && !isSelected;
          return (
            <WorkTile
              key={item.name}
              name={item.name}
              icon={item.icon}
              onClick={() => handleTileClick(item.name)}
              isSelected={isSelected}
              isDimmed={isDimmed}
              className="mb-3"
              variants={itemVariants} // Pass item variants to WorkTile
            />
          );
        })}
      </motion.div>

      <AnimatePresence initial={false} mode="wait">
        {selectedItem && (
          <motion.div
            key={selectedItem.name}
            layout
            variants={workItemVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={`${
              isMobile ? "col-span-1" : "col-span-3"
            } overflow-hidden`}
            style={{
              gridRowStart: gridRowStart,
            }}
          >
            <ExpandedWorkItem
              item={selectedItem}
              onClose={() => handleTileClick(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
