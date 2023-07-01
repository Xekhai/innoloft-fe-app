import React from 'react';

const UserInfo = ({ product }) => (
    <div className="flex items-center mb-4">
    <img src={product.user.profilePicture} alt={`${product.user.firstName} ${product.user.lastName}`} className="w-12 h-12 rounded-full mr-2" />
    <div>
      <p className="text-lg font-bold">{product.user.firstName} {product.user.lastName}</p>
      <p className="text-sm text-gray-500">{product.company.name}</p>
    </div>
  </div>
);

export default UserInfo;
