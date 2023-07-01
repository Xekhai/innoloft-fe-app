import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

const EditButton = styled.button`
  ${css({
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  })}
`;

const MainSection = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
<div className="flex flex-col w-full">
      <img
        onClick={toggleExpand}
        className={`w-full object-cover transition-all duration-500 ${
          isExpanded ? 'h-full' : 'h-300'
        }`}
        src={product.picture}
        alt={product.name}
      />
      <h2 className="text-2xl text-gray-500 font-bold mt-4 px-4">
        {product.name}
      </h2>
      <p className="text-sm text-gray-500 font-bold mt-2 px-4">
        {product.type.name}
      </p>
      <div className="flex justify-end"> {/* Step 1: Add this div with flexbox properties */}
      <Link to={`/product/edit/`}>
        <EditButton>Edit</EditButton>
      </Link>
      </div> {/* Step 2: Close the div */}
      <div
        className="text-sm text-gray-500 mt-2 px-4 mb-2"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      
    </div>

  );
};

export default MainSection;
