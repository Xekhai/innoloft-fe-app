import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const config = useSelector(state => state.config); // access config from Redux state
  console.log(config);

  const headerStyles = {
    backgroundColor: config.mainColor || 'bg-indigo-800'
  };

  return (
    <header className="flex items-center justify-center h-12 px-6 text-white" style={headerStyles}>
      <div className="md:flex w-3/4 hidden">
        <div className="flex items-center space-x-4">
          <img src={config.logo || 'https://img.innoloft.de/logo.svg'} alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">Innoloft</h1>
        </div>
        {config.hasUserSection && (
          <div className="flex items-center justify-end space-x-4 w-full">
            <input
              className="px-3 py-1 rounded bg-white w-1/2"
              type="text"
              placeholder="Search"
            />
            <FontAwesomeIcon icon={faUserCircle} className="text-white" />
          </div>
        )}
      </div>

      <div className="md:hidden flex w-full">
        <div className="flex items-center space-x-4">
          <img src={config.logo || 'https://img.innoloft.de/logo.svg'} alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">Innoloft FE</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
