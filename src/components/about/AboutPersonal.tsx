import React, { useEffect, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import { CertificateIcon, MusicIcon, NewZealandIcon, SurfSkateIcon } from '@/components/icons/abouticons';
import { AndroidIcon } from '@/components/icons/techicons';

const HomeAboutSection: React.FC = () => {
  const [infoText, setInfoText] = useState(text[0]);
  const [focusedIcon, setFocusedIcon] = useState(0);
  const [iconIsHovered, setIconIsHovered] = useState(false);
  // Add opacity state for fade effect
  const [opacity, setOpacity] = useState(1);
  const isMobile = useIsMobile();

  const onMouseEnter = (text: string, iconIndex: number) => {
    setIconIsHovered(true);
    // Fade out, change text, fade in
    setOpacity(0);
    setTimeout(() => {
      setInfoText(text);
      setFocusedIcon(iconIndex);
      setOpacity(1);
    }, 300); // Short delay to allow fade out to complete
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!iconIsHovered) {
        // Use the same fade transition for automatic changes
        setOpacity(0);
        setTimeout(() => {
          const nextIcon = (focusedIcon + 1) % text.length;
          setFocusedIcon(nextIcon);
          setInfoText(text[nextIcon]);
          setOpacity(1);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [focusedIcon, iconIsHovered]);

  return (
    <div className="bg-white py-8 w-full" style={{ position: 'relative' }}>
      <div className="max-w-3xl mx-auto px-8 w-full">
        {/* Icon container */}
        <div className="grid grid-cols-5 gap-4 items-center justify-items-center mb-8">
          <NewZealandIcon
            size={isMobile ? 40 : 70}
            onMouseEnter={() => onMouseEnter(text[0], 0)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 0}
          />
          <AndroidIcon
            size={isMobile ? 40 : 70}
            onMouseEnter={() => onMouseEnter(text[1], 1)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 1}
            showLabel={false}
          />
          <CertificateIcon
            size={isMobile ? 40 : 70}
            onMouseEnter={() => onMouseEnter(text[2], 2)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 2}
          />
          <MusicIcon
            size={isMobile ? 40 : 70}
            onMouseEnter={() => onMouseEnter(text[3], 3)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 3}
          />
          <SurfSkateIcon
            size={isMobile ? 40 : 70}
            onMouseEnter={() => onMouseEnter(text[4], 4)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 4}
          />
        </div>

        {/* Text container - fixed height and layout */}
        <div className="w-full" style={{ height: '200px', position: 'relative' }}>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              opacity, 
              transition: 'opacity 300ms ease-in-out',
              width: '100%' 
            }}
          >
            <p className="text-[10px] md:text-[20px] text-center max-w-2xl mx-auto">
              {infoText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const text = [
  'New Zealand, Mount Maunganui is where I was born and raised.',
  'I am an Android developer with 6 years experience working on a variety of products in many sectors.',
  'I studied Electrical and Electronic Engineering and obtained a BEng ' +
    '(Honours) from the University of Canterbury. I directed my course to ' +
    'have a heavy focus on programming and embedded systems.',
  'I have played music since a young age, competent at guitar, vocals and drums. I have a ' +
    'lot of experience composing and performing with bands and by myself.',
  'Growing up close to the beach has resulted in surfing and skateboarding ' +
    'being my favourite sports.'
];

export default HomeAboutSection;
