import React from 'react';
import Image from 'next/image';

interface WorkTileProps {
  name: string;
  icon: string;
  onClick: () => void;
  // isSelected: boolean; // We might use this later for styling
}

const WorkTile: React.FC<WorkTileProps> = ({ name, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #eee',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1 / 1', // Make it square
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      <Image src={icon} alt={`${name} icon`} width={60} height={60} style={{ marginBottom: '15px' }} />
      <span style={{ textAlign: 'center', fontWeight: 500 }}>{name}</span>
    </div>
  );
};

export default WorkTile; 