import user from "../../../assets/svg/user/user.svg";
import trip from "../../../assets/svg/user/myTrip.svg";
import enquiry from "../../../assets/svg/user/enquiry.svg";
import review from "../../../assets/svg/user/review.svg";
import support from "../../../assets/svg/user/support.svg";

import userActive from "../../../assets/svg/user/userActive.svg";
import tripActive from "../../../assets/svg/user/myTripActive.svg";
import enquiryActive from "../../../assets/svg/user/enquiryActive.svg";
import reviewActive from "../../../assets/svg/user/reviewActive.svg";
import supportActive from "../../../assets/svg/user/supportActive.svg";

export const USER_DASHBOAR_TABS = {
  mainTab: [
    {
      name: "My Profile",
      icon: user,
      iconActive: userActive,
      id: 1,
    },
    {
      name: "My Trips",
      icon: trip,
      iconActive: tripActive,
      id: 2,
    },
    {
      name: "My Enquiries",
      icon: enquiry,
      iconActive: enquiryActive,
      id: 3,
    },
  ],

  otherTab: [
    {
      name: "Reviews",
      icon: review,
      iconActive: reviewActive,
      id: 4,
    },
    {
      name: "Support",
      icon: support,
      iconActive: supportActive,
      id: 5,
    },
  ],
};
