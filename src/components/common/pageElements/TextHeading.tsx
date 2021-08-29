import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  linkRef: string;
  text: string;
}

const TextHeading: React.FC<Props> = ({ linkRef, text }) => {
  const [opacity, setOpacity] = React.useState(1);
  const [isMobile, setisMobile] = React.useState(window.innerWidth <= 1000);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);

  const resize = () => setisMobile(window.innerWidth <= 1000);

  const onMouseEnter = () => setOpacity(0.5);

  const onMouseLeave = () => setOpacity(1);

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
      <div style={{ listStyleType: 'none' }}>
        <li>
          <Link
            style={{
              opacity,
              color: 'white',
              textDecoration: 'none',
              listStyleType: 'none',
              padding: 0,
              fontSize: isMobile ? 10 : 15
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            to={`/${linkRef}`}
          >
            {text}
          </Link>
        </li>
      </div>
    </div>
  );
};

export default TextHeading;
