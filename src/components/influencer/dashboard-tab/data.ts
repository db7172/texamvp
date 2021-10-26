import hourlyActivity from "../../../assets/png/influencer/hourlyActivity.png";
import singleDayActivity from "../../../assets/png/influencer/singleDayActivity.png";
import MultyDayActivity from "../../../assets/png/influencer/multyDayActivity.png";

import onlineEvent from "../../../assets/png/influencer/onlineEvent.png";
import offlineEvent from "../../../assets/png/influencer/offlineEvent.png";

import workationIcon from "../../../assets/png/influencer/workationIcon.png";
import retreatIcon from "../../../assets/png/influencer/retreatIcon.png";

import detailsActivity from "../../../assets/png/influencer/details_activity.png";
import { indCurrency } from "../../../utils/utils";

import dp from "../../../assets/png/influencer/dp.png";

export const MODAL_ICON = {
  HOURLY_ACTIVITY: hourlyActivity,
  SINGLE_DAY_ACTIVITY: singleDayActivity,
  MULTY_DAY_ACTIVITY: MultyDayActivity,
  ONLINE_EVENT: onlineEvent,
  OFFLINE_EVENT: offlineEvent,
  WORKATION: workationIcon,
  RETREAT: retreatIcon,
};

export const statusOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "underProcess",
    label: "Under Process",
  },
  {
    value: "uploaded",
    label: "Uploaded",
  },
  {
    value: "onProgress",
    label: "On Progress",
  },
  {
    value: "booked",
    label: "Booked",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

export const highLowOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "highToLow",
    label: "High to Low",
  },
  {
    value: "lowToHigh",
    label: "Low to High",
  },
];

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

  EVENT: [
    {
      image: detailsActivity,
      date: "24 May'2021",
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Hr • Comedy",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "Under Process",
      bookedTickets: {
        totalBooked: 0,
        additionalInfo: {
          Bronze: "0/50",
          Silver: "0/40",
          Gold: "0/10",
        },
      },
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      date: "24 May'2021",
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Hr • Comedy",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "Upload",
      bookedTickets: {
        totalBooked: 0,
        additionalInfo: {
          Bronze: "0/50",
          Silver: "0/40",
          Gold: "0/10",
        },
      },
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      date: "24 May'2021",
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Hr • Comedy",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "On Progress",
      bookedTickets: {
        totalBooked: 25,
        additionalInfo: {
          Bronze: "10/50",
          Silver: "10/40",
          Gold: "5/10",
        },
      },
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      date: "24 May'2021",
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Hr • Comedy",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "Booked",
      bookedTickets: {
        totalBooked: 100,
        additionalInfo: {
          Bronze: "50/50",
          Silver: "40/40",
          Gold: "10/10",
        },
      },
      totlaTickets: 100,
    },
  ],

  RETREAT: [
    {
      image: detailsActivity,
      title: "THE SOJOURN Amzaing Workation",
      description: "Himachal Pradesh",
      price: {
        label: "Room Price",
        additionalInfo: {
          Bronze: indCurrency(1999),
          Silver: indCurrency(2149),
          Gold: indCurrency(3200),
        },
      },
      status: "Under Process",
      bookedTickets: {
        totalBooked: 0,
        additionalInfo: {
          Bronze: "0/50",
          Silver: "0/40",
          Gold: "0/10",
        },
      },
      totlaTickets: 100,
    },
    {
      image: detailsActivity,
      title: "THE SOJOURN Amzaing Workation",
      description: "Himachal Pradesh",
      price: {
        label: "Room Price",
        additionalInfo: {
          Bronze: indCurrency(1999),
          Silver: indCurrency(2149),
          Gold: indCurrency(3200),
        },
      },
      status: "On Progress",
      bookedTickets: {
        totalBooked: 50,
        additionalInfo: {
          Bronze: "25/50",
          Silver: "15/40",
          Gold: "10/10",
        },
      },
      totlaTickets: 100,
    },
  ],
};

export const COMPLETED = {
  ACTIVITY: [
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
            reply: [
              {
                name: "Fake Name",
                profile: dp,
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat.",
              },
            ],
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: 26999,
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
  ],
  EVENT: [
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: {
        label: "Starting Price",
        additionalInfo: {
          Bronze: indCurrency(99),
          Silver: indCurrency(149),
          Gold: indCurrency(200),
        },
      },
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
  ],
  RETREAT: [
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: {
        label: "Room Price",
        additionalInfo: {
          Bronze: indCurrency(1999),
          Silver: indCurrency(2149),
          Gold: indCurrency(3200),
        },
      },
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
    {
      image: detailsActivity,
      title: "Exciting Hampta Pass Trek trip ",
      description: "3 Days & 4 Nights • Trekking",
      price: {
        label: "Room Price",
        additionalInfo: {
          Bronze: indCurrency(1999),
          Silver: indCurrency(2149),
          Gold: indCurrency(3200),
        },
      },
      status: "Completed",
      ratting: 4.5,
      review: [
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
            reply: [
              {
                name: "Fake Name",
                profile: dp,
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat.",
              },
            ],
          },
        },
        {
          name: "Albert Flores",
          ratting: 4,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Arlene McCoy",
          ratting: 3,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
        {
          name: "Robert Fox",
          ratting: 5,
          profilePic: dp,
          tags: ["Affordable", "extra tag"],
          title: "Amazing Flight Service by Air Asia",
          comment: {
            initialComment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, sociis eget varius erat. Metus sed mauris platea tincidunt nam tincidunt nam aliquam et. Sollicitudin tortor in elementum vulputate. Pretium in semper bibendum mattis id aliquet quis sit. Tempus turpis risus sit eget arcu, varius ultricies praesent. Quam curabitur nunc euismod netus sapien. Lorem libero enim lorem sit enim, iaculis pretium sit. Posuere ultrices eu egestas at. Ut mattis netus vehicula tempor, dolor hendrerit ac.",
          },
        },
      ],
    },
  ],
};

export const EARNING = [
  {
    date: "20 Oct’ 20",
    package: {
      image: detailsActivity,
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Days & 4 Nights • Trekking",
    },
    numberOfBooking: 2,
    earning: 16945,
  },
  {
    date: "20 Oct’ 20",
    package: {
      image: detailsActivity,
      title: "Exciting Tungareshwar Trek trip",
      description: "3H • Trekking",
    },
    numberOfBooking: 2,
    earning: 16945,
  },
  {
    date: "20 Oct’ 20",
    package: {
      image: detailsActivity,
      title: "Open mic ft. Hyderabad Comedy Scene",
      description: "3 Days • Music",
    },
    numberOfBooking: 2,
    earning: 16945,
  },
];

export const CHART_DATA = [
  {
    name: "29’March 2021",
    value: 20000,
  },
  {
    name: "30’March 2021",
    value: 40000,
  },
  {
    name: "1’April 2021",
    value: 65000,
  },
  {
    name: "2’April 2021",
    value: 20000,
  },
  {
    name: "3’April 2021",
    value: 25000,
  },
];
