import trekking from "../assets/svg/activity-icon/trekking.svg";
import camping from "../assets/svg/activity-icon/camping.svg";
import skiing from "../assets/svg/activity-icon/sikking.svg";
import surfing from "../assets/svg/activity-icon/surfboard.svg";
import kayaking from "../assets/svg/activity-icon/kayak.svg";
import scuba_diving from "../assets/svg/activity-icon/oxigen.svg";
import snorkeling from "../assets/svg/activity-icon/snorkel.svg";
import web_show from "../assets/svg/activity-icon/television.svg";
import skydiving from "../assets/svg/activity-icon/parachuter.svg";
import music_festival from "../assets/svg/activity-icon/dj-mixer.svg";
import yoga_workshop from "../assets/svg/activity-icon/yoga-pose.svg";
import bike_trips from "../assets/svg/activity-icon/motorbike.svg";
import road_trips from "../assets/svg/activity-icon/address.svg";
import flea_market from "../assets/svg/activity-icon/shop.svg";
import culture_tour from "../assets/svg/activity-icon/canteen.svg";
import foodTour from "../assets/svg/activity-icon/pizza.svg";
import hostel from "../assets/svg/activity-icon/hotel.svg";
import HistoricalTour from "../assets/svg/activity-icon/pyramid.svg";
import LocalTour from "../assets/svg/activity-icon/map.svg";
import VillageTourism from "../assets/svg/activity-icon/neighborhood.svg";
import FarmTour from "../assets/svg/activity-icon/plantation.svg";
import Stargazing from "../assets/svg/activity-icon/binoculars.svg";
import ClubHopping from "../assets/svg/activity-icon/disco-ball.svg";
import FitnessWorkshop from "../assets/svg/activity-icon/dumbbell.svg";
import KidsWorkshop from "../assets/svg/activity-icon/teddy-bear.svg";
import SeniorTour from "../assets/svg/activity-icon/old-man.svg";
import BusTour from "../assets/svg/activity-icon/bus.svg";
import WomanTour from "../assets/svg/activity-icon/regular.svg";
import LGBTQTour from "../assets/svg/activity-icon/lgbtq.svg";
import SexTour from "../assets/svg/activity-icon/gender.svg";
import JungleSafari from "../assets/svg/activity-icon/forest.svg";
import HelicopterTour from "../assets/svg/activity-icon/helicopter.svg";
import Rafting from "../assets/svg/activity-icon/kayak.svg";
import Paragliding from "../assets/svg/activity-icon/parachute.svg";
import Sailing from "../assets/svg/activity-icon/sailboat.svg";
import AirBallon from "../assets/svg/activity-icon/hot-air-balloon.svg";
import CycleTrip from "../assets/svg/activity-icon/bicycle.svg";
import PhotographyTour from "../assets/svg/activity-icon/camera.svg";

export const ALL_ACTIVITY_ICON = {
  trekking: {
    icon: trekking,
    name: "Trekking",
  },
  camping: {
    icon: camping,
    name: "Camping",
  },
  skiing: {
    icon: skiing,
    name: "Skiing",
  },
  surfing: {
    icon: surfing,
    name: "Surfing",
  },
  kayaking: {
    icon: kayaking,
    name: "Kayaking",
  },
  scubaDiving: {
    icon: scuba_diving,
    name: "Scuba Diving",
  },
  snorkeling: {
    icon: snorkeling,
    name: "Snorkeling",
  },
  webShow: {
    icon: web_show,
    name: "Web Shows",
  },
  skydiving: {
    icon: skydiving,
    name: "Skydiving",
  },
  musicFestival: {
    icon: music_festival,
    name: "Music festival",
  },
  yogaWorkshop: {
    icon: yoga_workshop,
    name: "Yoga Workshop",
  },
  bikeTrips: {
    icon: bike_trips,
    name: "Bike Trips",
  },
  roadTrips: {
    icon: road_trips,
    name: "Road Trips",
  },
  fleaMarket: {
    icon: flea_market,
    name: "Flea Market",
  },
  foodTour: {
    icon: foodTour,
    name: "Food Tour",
  },
  cultureTour: {
    icon: culture_tour,
    name: "Culture Tour",
  },
  hostel: {
    icon: hostel,
    name: "Hostel",
  },
  historicalTour: {
    icon: HistoricalTour,
    name: "Historical Tour",
  },
  localTour: {
    icon: LocalTour,
    name: "Local Tour",
  },
  villageTourism: {
    icon: VillageTourism,
    name: "Village Tourism",
  },
  farmTour: {
    icon: FarmTour,
    name: "Farm Tour",
  },
  stargazing: {
    icon: Stargazing,
    name: "Stargazing",
  },
  clubHopping: {
    icon: ClubHopping,
    name: "Club Hopping",
  },
  fitnessWorkshop: {
    icon: FitnessWorkshop,
    name: "Fitness Workshop",
  },
  kidsWorkshop: {
    icon: KidsWorkshop,
    name: "Kids Workshop",
  },
  seniorTour: {
    icon: SeniorTour,
    name: "Senior Tour",
  },
  busTour: {
    icon: BusTour,
    name: "Bus Tour",
  },
  womanTour: {
    icon: WomanTour,
    name: "Woman Tour",
  },
  LGBTQTour: {
    icon: LGBTQTour,
    name: "LGBTQ Tour",
  },
  sexTour: {
    icon: SexTour,
    name: "Sex Tour",
  },
  jungleSafari: {
    icon: JungleSafari,
    name: "Jungle Safari",
  },
  helicopterTour: {
    icon: HelicopterTour,
    name: "Helicopter Tour",
  },
  rafting: {
    icon: Rafting,
    name: "Rafting",
  },
  paragliding: {
    icon: Paragliding,
    name: "Paragliding",
  },
  sailing: {
    icon: Sailing,
    name: "Sailing",
  },
  airBallon: {
    icon: AirBallon,
    name: "AirBallon",
  },
  cycleTrip: {
    icon: CycleTrip,
    name: "Cycle Trip",
  },
  photographyTour: {
    icon: PhotographyTour,
    name: "PhotographyTour",
  },
};

export const getActivityIcon = (number) => {
  const activity = Object.values(ALL_ACTIVITY_ICON).map((v) => v);

  return number >= 38 ? activity : activity.slice(0, number);
};
