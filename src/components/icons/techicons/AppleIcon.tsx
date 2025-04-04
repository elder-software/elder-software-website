import React from 'react';
import { FaApple } from 'react-icons/fa';
import TechIconContainer from './TechIconContainer';

interface AppleIconProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const AppleIcon: React.FC<AppleIconProps> = ({
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel
}) => (
  <TechIconContainer
    label="iOS"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    isFocused={isFocused}
    showLabel={showLabel}
  >
    <FaApple
      className="w-20 h-20 p-6 border border-gray-300 bg-white rounded-2xl text-gray-700"
    />
  </TechIconContainer>
);

export { AppleIcon };
