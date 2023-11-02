import React from 'react'

function Cards({cardData}) {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {cardData&&cardData.map((story,index)=>(
    <a href={story.url} target='_blank' key={story.item_type+index} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
    <img  src={story.multimedia[1].url} alt="Card Image" className="w-full h-40 object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{story.title}</div>
      <p className="text-gray-700 text-base">
        {story.abstract}
      </p>
      <p className=" text-gray-950 text-sm font-semibold mt-2">
        {story.byline}
      </p>
    </div>
  </a>
  ))}
    </div>
  )
}

export default Cards