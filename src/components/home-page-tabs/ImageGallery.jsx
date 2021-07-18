import React from "react";
import { Link } from "react-router-dom";
import { getEventPagePath } from "../../constant/comman.const";
import { IMAGE_GALLERY } from "../../constant/imageConst";

const ImageCard = ({ path, text }) => (
  <>
    <img
      className="tw-h-auto tw-w-full lg:tw-h-full lg:tw-w-auto tw-rounded-xl"
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
        <Link to={getEventPagePath("Comedy")}>
          <ImageCard path={IMAGE_GALLERY.COMEDY} text="Comedy" />
        </Link>
      </div>
      <div className="tw-relative">
        <Link to={getEventPagePath("Online Course")}>
          <ImageCard path={IMAGE_GALLERY.COURSE} text="Online Course" />
        </Link>
      </div>
      <div className="tw-relative">
        <Link to={getEventPagePath("Game")}>
          <ImageCard path={IMAGE_GALLERY.GAME} text="Game" />
        </Link>
      </div>
      <div className="tw-relative">
        <Link to={getEventPagePath("Dance")}>
          <ImageCard path={IMAGE_GALLERY.DANCE} text="Dance" />
        </Link>
      </div>
      <div className="tw-row-span-2 tw-relative">
        <Link to={getEventPagePath("Food")}>
          <ImageCard path={IMAGE_GALLERY.FOOD} text="Food" />
        </Link>
      </div>
      <div className="tw-relative">
        <Link to={getEventPagePath("Music")}>
          <ImageCard path={IMAGE_GALLERY.MUSIC} text="Music" />
        </Link>
      </div>
      <div className="tw-relative">
        <Link to={getEventPagePath("Workshop")}>
          <ImageCard path={IMAGE_GALLERY.WORKSHOP} text="Workshop" />
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;
