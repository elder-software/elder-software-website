import React from 'react';
import { FaReact } from 'react-icons/fa';
import TechIconContainer from './TechIconContainer';

interface ReactIconProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

const ReactIcon: React.FC<ReactIconProps> = ({
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel
}) => (
  <TechIconContainer
    label="React Native"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    isFocused={isFocused}
    showLabel={showLabel}
  >
    <FaReact
      className="w-20 h-20 p-6 border border-gray-300 bg-white rounded-2xl text-[#61DAFB]"
    />
  </TechIconContainer>
);

export { ReactIcon };
