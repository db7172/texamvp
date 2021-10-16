import { formatMomentDate, formatMomentTime } from "../../../utils/utils";

export const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
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
  } = value;

  const departureData = departure ? formateDeparture(departure) : [];

  return {
    activityName,
    description,
    payment: value.paymentRatePerPerson || value.paymentList,
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
