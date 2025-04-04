import React from 'react';
import { FaTv } from 'react-icons/fa';
import TechIconContainer from './TechIconContainer';

interface TvIconProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const TvIcon: React.FC<TvIconProps> = ({
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel
}) => {
  return (
    <TechIconContainer
      label="TV"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isFocused={isFocused}
      showLabel={showLabel}
    >
      <FaTv
        className="w-20 h-20 p-6 border border-gray-300 bg-white rounded-2xl text-gray-700"
      />
    </TechIconContainer>
  );
};

export { TvIcon };
