import React from 'react';

interface TechIconContainerProps {
  children: React.ReactNode;
  label?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const TechIconContainer: React.FC<TechIconContainerProps> = ({
  children,
  label,
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel = false
}) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-opacity duration-200 ${isFocused ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {showLabel && label && (
        <span className="mt-2 text-xs text-gray-600">{label}</span>
      )}
    </div>
  );
};

export default TechIconContainer; 