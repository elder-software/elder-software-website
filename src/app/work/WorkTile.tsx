import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface WorkTileProps {
  name: string;
  icon: string;
  onClick: () => void;
  isSelected: boolean;
  isDimmed: boolean;
  className?: string;
  variants?: Variants;
}

const WorkTile: React.FC<WorkTileProps> = ({
  name,
  icon,
  onClick,
  isSelected,
  isDimmed,
  className,
  variants,
}) => {
  const baseClasses =
    "border border-gray-200 rounded-lg p-4 " +
    "flex flex-col items-center justify-center " +
    "aspect-square cursor-pointer bg-white " +
    "shadow scale-100 opacity-100 " +
    "transition-[transform,box-shadow,opacity] duration-200 ease-in-out " +
    "relative overflow-hidden";

  const selectedClasses = "shadow-lg";
  const dimmedClasses = "opacity-70";

  const combinedClasses = [
    baseClasses,
    isSelected ? selectedClasses : "",
    isDimmed ? dimmedClasses : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const overlayClasses = [
    "absolute top-0 left-0 right-0 bottom-0",
    "bg-gray-300/10",
    isDimmed ? "opacity-100" : "opacity-0",
    "transition-opacity duration-100 ease-in-out",
    "pointer-events-none rounded-lg",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      onClick={onClick}
      className={combinedClasses}
      variants={variants}
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={60}
        height={60}
        className="mb-4 z-10 relative rounded-lg"
      />
      <span className="text-center font-medium z-10 relative">{name}</span>
      <div className={overlayClasses} />
    </motion.div>
  );
};

export default WorkTile;
