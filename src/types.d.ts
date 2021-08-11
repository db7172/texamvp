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
}
