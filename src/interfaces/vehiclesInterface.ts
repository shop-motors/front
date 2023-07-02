export interface IVehicles {
  item: any;
  brand: string;
  model: string;
  year: string;
  km: string;
  color: string;
  fipe_price: number;
  price: number;
  description: string;
  cover_img: string;
  galleryImages: string;
  galery_id: number;
}

export interface IBrand {
  [key: string]: [ImodelName];
}

interface ImodelName {
  name: string;
}

interface IEvent {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IVehiclesProviderProps {
  children: React.ReactNode;
}
