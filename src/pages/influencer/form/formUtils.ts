import { formatMomentDate, formatMomentTime } from "../../../utils/utils";

export const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const onKeyDownEvent = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

export const formateDeparture = (
  value: {
    dateOfDeparture: moment.MomentInputObject[];
    ratePerPerson: number | string;
  }[]
) => {
  return value.map((d) => ({
    dateRange: {
      start: formatMomentDate(d?.dateOfDeparture[0]),
      end: formatMomentDate(d?.dateOfDeparture[1]),
    },
    ratePerPerson: d.ratePerPerson,
  }));
};

export const formateInstructor = (
  value: {
    fullName: string;
    instructorDescription: string;
    instructuroPhoto: any[];
  }[]
) => {
  return value.map((d) => ({
    fullName: d.fullName,
    description: d.instructorDescription,
  }));
};

export const formateDestination = (
  value: {
    destinationDateRang: moment.MomentInputObject[];
    destination: string;
  }[]
) => {
  console.log(value);
  return value.map((d) => ({
    destinationDateRang: {
      start: formatMomentDate(d?.destinationDateRang[0]),
      end: formatMomentDate(d?.destinationDateRang[1]),
    },
    destination: d.destination,
  }));
};

export function stripUndefined(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export const hourlyAndSingleDayDataHelper = (value: any) => {
  const {
    activityName,
    description,
    departureDateFirstField,
    ratePerPersonFirstField,
    departure,
    activityType,
    activityLevel,
    ageGroupFrom,
    ageGroupTo,
    numberOfPeople,
    startTime,
    endTime,
    destinationFistField,
    googleMap,
    departureCityFirstField,
    departureCityList,
    reportingPointFirstField,
    droppingPointFirstField,
    reportingDroppingPointList,
    inclusion,
    exclusion,
    howToReachPickupPoint,
    thingsToCarry,
    thingsProhibitted,
    saftyNorms,
    certificateRequired,
    termsAndCondition,
    cancellationPolicy,
    transpotationFormData,
    tags,
    date,
    itineraryDetails,
    title,
    includes,
  } = value;

  const departureData = departure ? formateDeparture(departure) : [];

  return {
    activityName,
    description,
    payment: value.paymentList ? value.paymentList : value.paymentRatePerPerson,
    departureDate: [
      {
        dateRange: {
          start: formatMomentDate(
            departureDateFirstField ? departureDateFirstField[0] : ""
          ),
          end: formatMomentDate(
            departureDateFirstField ? departureDateFirstField[1] : ""
          ),
        },
        ratePerPerson: ratePerPersonFirstField,
      },
      ...(departureData || []),
    ],
    sailentFeatures: {
      activityType,
      activityLevel,
      ageGroup: {
        from: ageGroupFrom,
        to: ageGroupTo,
      },
      numberOfTicketInclude: numberOfPeople,
      timing: {
        start: formatMomentTime(startTime),
        end: formatMomentTime(endTime),
      },
      includes,
    },
    destinations: {
      destination: destinationFistField,
      googleMap,
    },
    departureCity: [departureCityFirstField, ...(departureCityList || [])],
    reportingAndDroppingPoint: [
      {
        reportingPoint: reportingPointFirstField,
        droppingPoint: droppingPointFirstField,
      },
      ...(reportingDroppingPointList || []),
    ],
    itinerary: {
      date: formatMomentDate(date),
      itineraryDetails,
      title,
    },
    transpotation: transpotationFormData,
    featureKeyWord: tags,
    inclusion,
    exclusion,
    tripEssential: {
      howToReachPickupPoint,
      thingsToCarry,
      thingsProhibitted,
      saftyNorms,
      certificateRequired,
      termsAndCondition,
      cancellationPolicy,
    },
  };
};

export const multiDayDataHelper = (value: any) => {
  const {
    departureDateFirstField,
    ratePerPersonFirstField,
    departureData,
    destinationDateRang,
    destinations,
    departureCityFirstField,
    departureCityList,
    reportingPointFirstField,
    droppingPointFirstField,
    reportingDroppingPointList,
    inclusion,
    exclusion,
    howToReachPickupPoint,
    thingsToCarry,
    thingsProhibitted,
    saftyNorms,
    certificateRequired,
    termsAndCondition,
    cancellationPolicy,
    includes,
    additionalCharges,
    notes,
    disclaimer,
  } = value;

  const updatedDestinations = destinations
    ? formateDestination(destinations)
    : [];

  return {
    activityName: value.activityName,
    description: value.description,
    payment: value.paymentList ? value.paymentList : value.paymentRatePerPerson,
    departureDate: [
      {
        dateRange: {
          start: formatMomentDate(departureDateFirstField[0] || ""),
          end: formatMomentDate(departureDateFirstField[1] || ""),
        },
        ratePerPerson: ratePerPersonFirstField,
      },
      ...(departureData || []),
    ],
    sailentFeatures: {
      activityType: value.activityType,
      activityLevel: value.activityLevel,
      ageGroup: {
        from: value.ageGroupFrom,
        to: value.ageGroupTo,
      },
      numberOfTicketInclude: value.numberOfPeople,
      activityDuration: value.activityDuration,
      includes,
    },
    destination: [
      {
        destinationDateRang: {
          start: formatMomentDate(
            destinationDateRang ? destinationDateRang[0] : ""
          ),
          end: formatMomentDate(
            destinationDateRang ? destinationDateRang[1] : ""
          ),
        },
        destination: value.destinationFistField,
      },
      ...(updatedDestinations || []),
    ],
    departureCity: [departureCityFirstField, ...(departureCityList || [])],
    reportingAndDroppingPoint: [
      {
        reportingPoint: reportingPointFirstField,
        droppingPoint: droppingPointFirstField,
      },
      ...(reportingDroppingPointList || []),
    ],
    accomodation: value.accomodationFormData,
    transpotation: value.transpotationFormData,
    itinerary: value.itineraryPanesFormData,
    featureKeyWord: value.tags,
    inclusion,
    exclusion,
    importantNote: {
      additionalCharges,
      notes,
      disclaimer,
    },
    tripEssential: {
      howToReachPickupPoint,
      thingsToCarry,
      thingsProhibitted,
      saftyNorms,
      certificateRequired,
      termsAndCondition,
      cancellationPolicy,
    },
  };
};
