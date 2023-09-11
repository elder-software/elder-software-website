import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import './products.css';

const Products: React.FC = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const iconImages = require.context(
    '../../assets/appIcons',
    true,
    /\.(png|jpe?g|svg)$/
  );

  return (
    <div className="mainDiv">
      <div className="greyInnerDiv">
        <div className="titleDiv">
          <div className="titleInnerDiv">
            <img
              className="titleImage"
              src={iconImages('./WFHTax.png')}
              alt={'WFHTaxImage'}
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
          <span className={`contentText ${isExpanded ? 'expanded' : ''}`}>
            {require('!raw-loader!./privacyPolicy.txt').default}
          </span>
        </div>
      </div>
    </div>
  );
};

const wfhTaxText =
  'Aimed at people that are permanent employees that work at home. ' +
  'This app helps you to calculate your work from home tax deduction.';

export default Products;
