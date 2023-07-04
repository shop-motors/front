export interface IVehicles {
  map(
    arg0: (item: any, index: number) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  cover_img: string;
  galleryImages: string[];
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
