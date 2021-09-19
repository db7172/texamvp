import hourlyActivity from "../../../assets/png/influencer/hourlyActivity.png";
import singleDayActivity from "../../../assets/png/influencer/singleDayActivity.png";
import MultyDayActivity from "../../../assets/png/influencer/multyDayActivity.png";

import onlineEvent from "../../../assets/png/influencer/onlineEvent.png";
import offlineEvent from "../../../assets/png/influencer/offlineEvent.png";

import workationIcon from "../../../assets/png/influencer/workationIcon.png";
import retreatIcon from "../../../assets/png/influencer/retreatIcon.png";

import detailsActivity from "../../../assets/png/influencer/details_activity.png";

export const MODAL_ICON = {
  HOURLY_ACTIVITY: hourlyActivity,
  SINGLE_DAY_ACTIVITY: singleDayActivity,
  MULTY_DAY_ACTIVITY: MultyDayActivity,
  ONLINE_EVENT: onlineEvent,
  OFFLINE_EVENT: offlineEvent,
  WORKATION: workationIcon,
  RETREAT: retreatIcon,
};

// mock data

export const DETAILS = {
  ACTIVITY: [
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "Under Process",
      bookedTickets: 0,
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "Upload",
      bookedTickets: 0,
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip demo for more text",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "On Progress",
      bookedTickets: 24,
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "Booked",
      bookedTickets: 100,
      totlaTickets: 100,
    },
  ],
};
