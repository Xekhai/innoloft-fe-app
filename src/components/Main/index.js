import React from 'react';

function Main() {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Main Component</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/product" className="text-blue-500 hover:underline">
                Product
              </a>
            </li>
            <li>
              <a href="/product/edit" className="text-blue-500 hover:underline">
                Edit Product
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Main;
