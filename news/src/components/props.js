import React from 'react'
import { PropertiesBadgesValues, sections } from '../utils/constants';

const PropertiesBadges = () => {
  return (
    <div class="overflow-x-auto p-4">
    <div className="flex space-x-2">
    {PropertiesBadgesValues.map(section => (
        <span className="bg-blue-500 text-white px-2 py-1  text-base rounded-full">{section}</span>
    ))}
    </div>
    </div>
  );
};

export default PropertiesBadges