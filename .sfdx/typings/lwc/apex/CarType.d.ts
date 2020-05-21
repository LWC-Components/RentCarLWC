declare module "@salesforce/apex/CarType.getCarTypes" {
  export default function getCarTypes(): Promise<any>;
}
declare module "@salesforce/apex/CarType.allMatchingCars" {
  export default function allMatchingCars(param: {carType: any}): Promise<any>;
}
declare module "@salesforce/apex/CarType.creationExprerience" {
  export default function creationExprerience(param: {carId: any, title: any, experience: any}): Promise<any>;
}
