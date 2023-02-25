import React from "react";

import { GrFormClose } from "react-icons/gr";
import {
  AiOutlineLike,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function ImageModal({ image, onClose }) {
  const { user, urls } = image;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
      <div className="container md:w-fit sm:w-fit w-fit">
        <div className="flex justify-end text-black">
          <button onClick={onClose} className="translate-y-3 translate-x-2">
            <GrFormClose size={22} className="bg-white rounded-full" />
          </button>
        </div>
        <div className="grid justify-items-center">
          <img
            src={urls.regular}
            alt=""
            className="rounded-t-lg max-h-[500px] md:max-w-[700px] md:w-fit"
          />
        </div>

        <div className="bg-white dark:bg-gray-400 h-36 w-full p-4 flex-col justify-between rounded-b-lg">
          <div className="imageName flex gap-1">
            <img
              src={user.profile_image.large}
              alt={image.alt_description}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-medium text-sm dark:text-black">
                {image.user.name}
              </div>
              <p className="text-slate-600/70 text-xs dark:text-slate-700 italic">
                @{user.username}
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <div className="socialIcons flex-col">
              <div className=" flex items-center space-x-1 dark:text-black">
                {" "}
                <span>
                  {" "}
                  <AiOutlineInstagram />{" "}
                </span>{" "}
                <span className="text-sm dark:text-black">
                  {" "}
                  /{user.social.instagram_username}{" "}
                </span>
              </div>
              <div className=" flex lex items-center dark:text-black">
                {" "}
                <span>
                  {" "}
                  <AiOutlineTwitter />{" "}
                </span>{" "}
                <span className="text-sm dark:text-black">
                  {" "}
                  /{user.social.twitter_username}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex space-x-1 dark:text-black">
              {" "}
              <span>
                <AiOutlineLike size={15} />
              </span>{" "}
              <span> {image.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
