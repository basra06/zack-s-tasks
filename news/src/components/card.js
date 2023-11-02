import React from 'react'

function Cards() {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
        <img src="your-image.jpg" alt="Card Image" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Card description goes here. This is a clickable card.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
        <img src="your-image.jpg" alt="Card Image" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Card description goes here. This is a clickable card.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
        <img src="your-image.jpg" alt="Card Image" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Card description goes here. This is a clickable card.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
        <img src="your-image.jpg" alt="Card Image" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Card description goes here. This is a clickable card.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards