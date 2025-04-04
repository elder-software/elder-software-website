import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import TechIconContainer from './TechIconContainer';

interface MobileIconProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const MobileIcon: React.FC<MobileIconProps> = ({
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel
}) => {
  return (
    <TechIconContainer
      label="Mobile"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isFocused={isFocused}
      showLabel={showLabel}
    >
      <FaMobileAlt
        className="w-20 h-20 p-6 border border-gray-300 bg-white rounded-2xl text-gray-700"
      />
    </TechIconContainer>
  );
};

export { MobileIcon };
