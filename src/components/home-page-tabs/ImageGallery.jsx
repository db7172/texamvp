import React from "react";
import { IMAGE_GALLERY } from "../../constant/home.const";

const ImageCard = ({ path, text }) => (
  <>
    <img
      className="tw-h-auto tw-w-full lg:tw-h-full lg:tw-w-auto"
      src={path}
      alt={text}
    />
    <div className="tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-flex tw-justify-center tw-items-center tw-z-10">
      <p className="tw-text-white tw-font-bold md:tw-text-lg tw-text-sm">
        {text}
      </p>
    </div>
  </>
);

const ImageGallery = () => {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-5">
      <div className="tw-row-span-2 tw-relative">
        <ImageCard path={IMAGE_GALLERY.COMEDY} text="Comedy" />
      </div>
      <div className="tw-relative">
        <ImageCard path={IMAGE_GALLERY.COURSE} text="Online Course" />
      </div>
      <div className="tw-relative">
        <ImageCard path={IMAGE_GALLERY.GAME} text="Game" />
      </div>
      <div className="tw-relative">
        <ImageCard path={IMAGE_GALLERY.DANCE} text="Dance" />
      </div>
      <div className="tw-row-span-2 tw-relative">
        <ImageCard path={IMAGE_GALLERY.FOOD} text="Food" />
      </div>
      <div className="tw-relative">
        <ImageCard path={IMAGE_GALLERY.MUSIC} text="Music" />
      </div>
      <div className="tw-relative">
        <ImageCard path={IMAGE_GALLERY.WORKSHOP} text="Workshop" />
      </div>
    </div>
  );
};

export default ImageGallery;
