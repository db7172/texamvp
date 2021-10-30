declare module "Models" {
  export type TitleBreadCrumb = {
    name: string;
    url: string;
  };

  export type ActivityObjectTypes = {
    activityName: string;
    cities: string;
    duration: string;
    imgUrl: string;
    offerBy: string;
    otherDetails: string;
    price: number;
    rating: number;
    review: string;
    type: string;
  };

  export type EventObjectTypes = {
    datetime: string;
    imgUrl: string;
    name: string;
    price: number;
    type: string;
  };

  export type Package = {
    type: string;
    price: number;
    description: string;
  };

  export type AdditionalInfoType = {
    Bronze: string;
    Silver: string;
    Gold: string;
  };

  export type DataDetailsType = {
    image: string;
    title: string;
    description: string;
    date?: string;
    price:
      | number
      | {
          label: string;
          additionalInfo: AdditionalInfoType;
        };
    status: string;
    totlaTickets: number;
    bookedTickets:
      | number
      | {
          totalBooked: number;
          additionalInfo: AdditionalInfoType;
        };
  };

  export type DetailsTabTable = {
    key: string | number;
    sno: number;
    tripId: number;
    name: string;
    noOfPeople: number;
    phoneNo: number;
    city: string;
    amtRecd: number;
    pendingAmt: number;
    commission: number;
  };

  export type StatementTableData = {
    key: string | number;
    date: string;
    orderId: number;
    package: {
      image: string;
      title: string;
      description: string;
    };
    noOfTicketSold: number;
    totalAmount: number;
    amountTransferred: number;
    moreInfo: DetailsTabTable[];
  };

  export type ReviewData = {
    key: string;
    name: string;
    ratting: number;
    profilePic: string;
    tags: string[];
    title: string;
    comment: {
      initialComment: string;
      reply?: Array<{
        name: string;
        profile: string;
        comment: string;
      }>;
    };
  };

  export type TripData = {
    key: string;
    image: string;
    title: string;
    description: string;
    price: DataDetailsType["price"];
    status: string;
    ratting: number;
    review: Array<ReviewData>;
  };
}
