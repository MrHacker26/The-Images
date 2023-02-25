import React from "react";

import { AiOutlineLike } from "react-icons/ai";

function ImageList({ images, onImageClick }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 " data-aos="fade-up">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-gray-200 rounded-md cursor-pointer shadow-gray-600/60 shadow-lg p-4 dark:bg-gray-300"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className=" hover:scale-105 duration-300 h-80 w-full object-cover rounded-lg"
          />
          <div className="py-2 flex justify-between">
            <div className="pt-4">
              <div className="flex gap-2">
                <img
                  src={image.user.profile_image.large}
                  alt={image.alt_description}
                  className="w-10 rounded-full"
                />

                <div>
                  <div
                    className="font-medium text-sm dark:text-black"
                    data-aos="fade-right"
                  >
                    {image.user.name}
                  </div>
                  <p className="text-slate-600/80 text-xs">
                    @{image.user.username}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex space-x-1 pt-8">
              <span>
                <AiOutlineLike size={15} />
              </span>
              <span> {image.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
