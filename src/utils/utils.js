import rightArrow from "../assets/svg/nextArrow.svg";
import leftArrow from "../assets/svg/prevArrow.svg";

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */

export function chunkArray(myArray, chunk_size = 5) {
  if (!myArray) return [];
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

export const upperCase = (text) => text.toUpperCase();

// carousel settings
export const defaultSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <img
      className="tw-flex tw-justify-center tw-items-center tw-rounded-full hover:tw-shadow-nav-bar"
      src={rightArrow}
      alt=""
    />
  ),
  prevArrow: (
    <img
      className="tw-flex tw-justify-center tw-items-center tw-rounded-full"
      src={leftArrow}
      alt=""
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// currency formatter

export const indCurrency = (amount) => {
  const rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  return rupeeIndian.format(amount) + "/-";
};
