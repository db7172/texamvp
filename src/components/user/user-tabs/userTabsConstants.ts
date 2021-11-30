import portfolio from "../../../assets/png/portfolio.png";
import cancel from "../../../assets/svg/cancel.svg";
import team from "../../../assets/png/team.png";

import activity from "../../../assets/svg/mountant.svg";
import event from "../../../assets/svg/event.svg";
import retreat from "../../../assets/svg/retreat.svg";
import payment from "../../../assets/svg/credit-card.svg";

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

export const PAYMENT_CARD = {
  icon: payment,
  title: "Payment Details",
  description: "Basic info, for a faster booking experience and travel",
  key: "payment-details",
}

export const UPCOMING_TRIP_DATA = [
  {
    icon: activity,
    title: "Exciting Hampta Pass Trek trip",
    duration: "3 Night 4 Days",
    type: "Activity",
    mode: "offline",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    activityDate: "20 Mar’2020",
    bookingAmt: 3500,
    travellers: [
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: "12345678901"
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
    ]
  },
  {
    icon: event,
    title: "Stand-up Comedy For A Cause",
    duration: "3 Night 4 Days",
    type: "Event",
    mode: "offline",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    activityDate: "20 Mar’2020",
    bookingAmt: 3500,
    travellers: [
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: "12345678901"
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
    ]
  },
  {
    icon: event,
    title: "Stand-up Comedy For A Cause",
    duration: "3 Night 4 Days",
    type: "Event",
    mode: "online",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    activityDate: "20 Mar’2020",
    bookingAmt: 3500,
    travellers: [
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: "12345678901"
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
    ]
  },
  {
    icon: retreat,
    title: "Mindfull Lessons",
    duration: "3 Night 4 Days",
    type: "Retreat",
    mode: "offline",
    bookingId: "TE90163259975094",
    bookingDate: "20 Feb’2020",
    activityDate: "20 Mar’2020",
    bookingAmt: 3500,
    travellers: [
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: "12345678901"
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
      {
        name: "Brooklyn Simmons",
        age: 32,
        contact: ""
      },
    ]
  },
];

export const hotelColumnSchema = [
  {
    title: 'STAY',
    dataIndex: 'stay',
    key: 'stay',
  },
  {
    title: 'HOTEL NAME',
    dataIndex: 'hotelName',
    key: 'hotelName',
  },
  {
    title: 'CITY',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'ROOM TYPE',
    dataIndex: 'roomType',
    key: 'roomType',
  },
  {
    title: 'MEAL PLAN',
    dataIndex: 'mealPlan',
    key: 'mealPlan',
  },
  {
    title: 'CHECK-IN',
    dataIndex: 'checkIn',
    key: 'checkIn',
  },
  {
    title: 'CHECK-OUT',
    dataIndex: 'checkOut',
    key: 'checkOut',
  },
];

export const HOTEL_DETAILS = [
  {
    stay: "1 Night",
    hotelName: "Tashi namgay resort",
    hotelContact: "022-28442844",
    city: "Paro",
    roomType: "Standard",
    lunch: true,
    dinner: true,
    checkInDate: "14 Feb’2020",
    checkInTime: "12:00 PM",
    checkOutDate: "15 Feb’2020",
    checkOutTime: "1:00 PM"
  },
  {
    stay: "1 Night",
    hotelName: "Tashi namgay resort",
    city: "Paro",
    roomType: "Standard",
    lunch: true,
    dinner: false,
    checkInDate: "14 Feb’2020",
    checkOutDate: "15 Feb’2020",
  },
  {
    stay: "1 Night",
    hotelName: "Tashi namgay resort",
    city: "Paro",
    roomType: "Standard",
    lunch: true,
    dinner: false,
    checkInDate: "14 Feb’2020",
    checkOutDate: "15 Feb’2020",
  },
]
