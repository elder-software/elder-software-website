import React from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = React.useState(false);

  const resize = (): void => setIsMobile(window.innerWidth <= 1000);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
