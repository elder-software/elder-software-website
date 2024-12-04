import React from 'react';
import { MdEmail } from 'react-icons/md';
import { HeaderIconProps } from './styles';
import './index.css';
import Link from 'next/link';

const ContactIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link href="/contact">
    <div className="iconBackground">
      <MdEmail
        className="icon"
        style={{
          height: size || 80,
          width: size || 80
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Contact
      </h5>
    </div>
  </Link>
);

export { ContactIcon };
