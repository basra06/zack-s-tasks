import React from 'react'
import { PropertiesBadgesValues } from '../utils/constants';

const PropertiesBadges = ({selectSection ,selectedSection}) => {
  return (
    <div className="overflow-x-auto p-4">
    <div className="flex space-x-2">
    {PropertiesBadgesValues.map((section, index) => (
        <span key={section+index} onClick={()=>selectSection(section)} className={` cursor-pointer border-solid  px-2 py-1 text-base rounded-full ${selectedSection === section ? "bg-blue-500 text-white" : " bg-gray-50 text-gray-600"}`}>{section}</span>
    ))}
    </div>
    </div>
  );
};

export default PropertiesBadges