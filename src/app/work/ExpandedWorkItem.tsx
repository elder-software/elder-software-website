import React from 'react';
import Image from 'next/image';
import Carousel from './carousel/Carousel';

interface WorkItem {
  name: string;
  icon: string;
  technologies: (size: number) => React.ReactNode[];
  keyDetails: string[];
  description: string;
  screenshots: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

interface ExpandedWorkItemProps {
  item: WorkItem;
  onClose: () => void;
}

const ExpandedWorkItem: React.FC<ExpandedWorkItemProps> = ({ item, onClose }) => {
  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        border: '1px solid #eee',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '30px',
        alignItems: 'start',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          color: '#888',
        }}
      >
        &times;
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Image src={item.icon} alt={`${item.name} icon`} width={50} height={50} />
          <h2 style={{ margin: 0, fontSize: '1.8em' }}>{item.name}</h2>
        </div>

        <div>
          <h4 style={{ marginTop: 0, marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Technologies Used</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {item.technologies(30).map((IconComponent, index) => (
              <React.Fragment key={index}>
                {IconComponent}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ marginTop: 0, marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Key Details</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
            {item.keyDetails.map((detail) => (
              <li key={detail} style={{ marginBottom: '5px' }}>{detail}</li>
            ))}
          </ul>
        </div>

        {item.testimonial && (
          <div style={{ marginTop: '15px', fontStyle: 'italic', borderLeft: '3px solid #eee', paddingLeft: '15px' }}>
            <p style={{ margin: 0 }}>"{item.testimonial}"</p>
            {item.testimonialAuthor && (
              <p style={{ margin: '5px 0 0', textAlign: 'right', fontWeight: 'bold' }}>- {item.testimonialAuthor}</p>
            )}
          </div>
        )}
      </div>

      {/* Right Column: Description and Screenshots */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h4 style={{ marginTop: 0, marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Description</h4>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{item.description}</p>
        </div>

        {item.screenshots && item.screenshots.length > 0 && (
          <div>
            <h4 style={{ marginTop: 0, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Screenshots</h4>
            <Carousel>
              {item.screenshots.map((screenshotSrc, index) => (
                <Image
                  key={index}
                  src={screenshotSrc}
                  alt={`${item.name} screenshot ${index + 1}`}
                  width={500} 
                  height={300}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandedWorkItem; 