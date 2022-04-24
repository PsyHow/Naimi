export interface ITicket {
  addresses: IAddress[];
  city: IUni;
  description: string;
  has_photo: boolean;
  has_review: boolean;
  call: boolean;
  price_to: number | null;
  verified_only: boolean;
  work_unit: IUni | null;
}

export interface IAddress {
  id: number;
  address: string;
  city: IUni | null;
}

export interface IUni {
  id: number;
  text: string;
}

export interface IVacancy {
  title: string;
  addresses: IAddress[];
  city: IUni;
  description: string;
  price_form: number | null;
  price_to: number | null;
  experience: IUni;
}
