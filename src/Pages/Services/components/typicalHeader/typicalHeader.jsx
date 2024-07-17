import React from 'react';
import './typicalHeader.css';

const TypicalHeader = ({Title, subTitle}) => {
  return (
    <div>
      <div className="typicalSectionHeader">
        <h3 dangerouslySetInnerHTML={{ __html: subTitle }}></h3>
        <h1 dangerouslySetInnerHTML={{ __html: Title }}></h1>
      </div>
    </div>
  )
}

export default TypicalHeader;
