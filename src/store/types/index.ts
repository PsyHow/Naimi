export interface ITicket {
  addresses: IAddress[];
  city: ICity;
  description: string;
  has_photo: boolean; // С фото
  has_review: boolean; // С отзывами
  call: boolean; // Позвонить = true, Написать в чате = false
  price_to: number | null;
  verified_only: boolean; // Личность подтверждена
  work_unit: IWorkUnit | null; // Id из “За все работу”
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
