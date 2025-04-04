import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import TechIconContainer from './TechIconContainer';

interface AndroidIconProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const AndroidIcon: React.FC<AndroidIconProps> = ({
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel = true
}) => (
  <TechIconContainer
    label="Android"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    isFocused={isFocused}
    showLabel={showLabel}
  >
    <FaAndroid
      className="w-20 h-20 p-6 border border-gray-300 bg-white rounded-2xl text-gray-700"
    />
  </TechIconContainer>
);

export { AndroidIcon };
