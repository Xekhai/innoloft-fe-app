import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBriefcase, faChartBar, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const TechnologyIcon = () => <FontAwesomeIcon icon={faWrench} className="text-gray-500" />;
const BusinessModelIcon = () => <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />;
const TRRIcon = () => <FontAwesomeIcon icon={faChartBar} className="text-gray-500" />;
const InvestmentEffortIcon = () => <FontAwesomeIcon icon={faDollarSign} className="text-gray-500" />;

const DetailCard = ({ IconComponent, title, content }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <IconComponent />
      <p className="ml-2 text-gray-500">{title}</p>
    </div>
    <div className="ml-6">
      {Array.isArray(content) ? (
        content.map((item) => (
          <div key={item.id} className="px-4 py-1 text-xs bg-gray-200 text-gray-500 rounded-full mb-1 inline-block mr-2">
            {item.name}
          </div>
        ))
      ) : (
        <div className="px-4 py-1 text-xs text-gray-500 rounded-full mb-1 inline-block">{content}</div>
      )}
    </div>
  </div>
);

const DetailSection = ({ product }) => (
  <div className="flex flex-wrap">
    <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4">
      <DetailCard IconComponent={TechnologyIcon} title="Technologies/Categories:" content={product.categories} />
      <DetailCard IconComponent={BusinessModelIcon} title="Business Models:" content={product.businessModels} />
    </div>

    <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4">
      <DetailCard IconComponent={TRRIcon} title="TRL:" content={product.trl.name} />
      <DetailCard IconComponent={InvestmentEffortIcon} title="Investment Effort / Cost:" content={product.investmentEffort} />
    </div>
  </div>
);

export default DetailSection;
