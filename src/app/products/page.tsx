"use client"

import React from 'react';
import './products.css';
import Image from 'next/image';

const Products: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="mainDiv">
      <div className="greyInnerDiv">
        <div className="titleDiv">
          <div className="titleInnerDiv">
            <Image
              className="titleImage"
              src={'/appIcons/WFHTax.png'}
              alt={'WFHTaxImage'}
              width={80}
              height={80}
            />
            <h1 className="titleText">Work From Home Tax</h1>
          </div>
        </div>

        <div className="contentDiv">
          <span className="summaryText">{wfhTaxText}</span>
          <button
            className={`button ${isExpanded ? 'rotate' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            &#9660;
          </button>
          {/* <span className={`contentText ${isExpanded ? 'expanded' : ''}`}>
            {require('!raw-loader!./privacyPolicy.txt').default}
          </span> */}
        </div>
      </div>
    </div>
  );
};

const wfhTaxText =
  'Aimed at people that are permanent employees that work at home. ' +
  'This app helps you to calculate your work from home tax deduction.';

export default Products;
