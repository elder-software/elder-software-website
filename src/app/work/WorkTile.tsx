import React from 'react';
import Image from 'next/image';

interface WorkTileProps {
  name: string;
  icon: string;
  onClick: () => void;
  isSelected: boolean; // To apply selected styles
  isDimmed: boolean;   // To apply dimmed styles when another tile is selected
  style?: React.CSSProperties; // Add optional style prop
  className?: string; // Add optional className prop
}

const WorkTile: React.FC<WorkTileProps> = ({ name, icon, onClick, isSelected, isDimmed, style, className }) => {
  // Define base, selected, and dimmed styles
  const baseStyle: React.CSSProperties = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1 / 1', 
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transform: 'scale(1)',
    opacity: 1,
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out', // Include opacity
    position: 'relative', // Needed for the absolute overlay
    overflow: 'hidden', // Ensure overlay respects border radius
  };

  const selectedStyle: React.CSSProperties = {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    // Ensure selected items are fully opaque if dimmedStyle might affect others
    opacity: 1,
  };

  const dimmedStyle: React.CSSProperties = {
    opacity: 0.7, // Main dimming via opacity
    // Remove backgroundImage - handled by overlay div now
    // backgroundImage: 'linear-gradient(rgba(180, 180, 180, 0.1), rgba(180, 180, 180, 0.1))',
  };

  // Combine styles based on props and incoming style prop
  const combinedStyle = {
    ...baseStyle,
    ...(isSelected ? selectedStyle : {}),
    ...(isDimmed ? dimmedStyle : {}),
    ...style, // Spread the incoming style prop
  };

  // Styles for the overlay div
  const overlayStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(180, 180, 180, 0.1)', // The grey overlay color
      opacity: isDimmed ? 1 : 0, // Control opacity based on isDimmed
      transition: 'opacity 0.1s ease-in-out', // Animate the overlay opacity
      pointerEvents: 'none', // Make sure it doesn't block clicks
      borderRadius: 'inherit', // Match parent's border radius
  };

  return (
    <div
      onClick={onClick}
      style={combinedStyle}
      className={className}
      // Remove inline mouse enter/leave styles if applying selectedStyle directly
      // onMouseEnter={...}
      // onMouseLeave={...}
    >
      {/* Content (Icon and Name) */}
      <Image src={icon} alt={`${name} icon`} width={60} height={60} style={{ marginBottom: '15px', zIndex: 1, position: 'relative' }} />
      <span style={{ textAlign: 'center', fontWeight: 500, zIndex: 1, position: 'relative' }}>{name}</span>

      {/* Grey Overlay Div for Dimming Animation */}
      <div style={overlayStyle} />
    </div>
  );
};

export default WorkTile; 