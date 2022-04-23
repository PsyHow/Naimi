export interface ITicket {
  addresses: IAddress[];
  city: ICity;
  description: string;
  has_photo: boolean;
  has_review: boolean;
  call: boolean;
  price_to: number | null;
  verified_only: boolean;
  work_unit: IWorkUnit | null;
}

export interface IAddress {
  id: number;
  address: string;
  city: ICity | null;
}

export interface ICity {
  id: number;
  text: string;
}

export interface IWorkUnit {
  id: number;
  text: string;
}

export interface ICallMethod {
  id: number;
  text: string;
}
