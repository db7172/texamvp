import portfolio from "../../../assets/png/portfolio.png";
import cancel from "../../../assets/svg/cancel.svg";
import team from "../../../assets/png/team.png";

import activity from "../../../assets/svg/mountant.svg";
import event from "../../../assets/svg/event.svg";
import retreat from "../../../assets/svg/retreat.svg";

export const MY_TRIP_CARD = {
  upcomingTour: {
    icon: portfolio,
    title: "Upcoming Tour",
    description: "Basic info, for a faster booking experience and travel",
    key: "upcoming-tour",
  },
  cancelledTour: {
    icon: cancel,
    title: "Cancelled Tour",
    description: "Basic info, for a faster booking experience and travel",
    key: "cancelled-tour",
  },
  completedTour: {
    icon: team,
    title: "Completed Tour",
    description: "Basic info, for a faster booking experience and travel",
    key: "completed-tour",
  },
};

export const UPCOMING_TRIP_DATA = [
  {
    icon: activity,
    title: "Exciting Hampta Pass Trek trip",
    duration: "3 Night 4 Days",
    type: "Activity",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    bookingAmt: 3500,
  },
  {
    icon: event,
    title: "Stand-up Comedy For A Cause",
    duration: "3 Night 4 Days",
    type: "Event",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    bookingAmt: 3500,
  },
  {
    icon: retreat,
    title: "Mindfull Lessons",
    duration: "3 Night 4 Days",
    type: "Retreat",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    bookingAmt: 3500,
  },
];
