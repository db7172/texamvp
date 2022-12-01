import moment from "moment";

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */

 const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </button>
  );

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
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SlickArrowRight/>,
  prevArrow: <SlickArrowLeft/>,
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

// initial state for filters
export const formatActiveButton = (arr) => {
  return arr.reduce((pre, value) => {
    pre[value] = false;
    return pre;
  }, {});
};

export const formatMomentDate = (value) => {
  return moment(value).format("DD-MM-YYYY");
};

export const formatMomentTime = (value) => {
  return moment(value).format("h:mm:ss a");
};
