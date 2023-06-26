export interface IVehicles {
  brand: string;
  model: string;
  year: string;
  km: string;
  color: string;
  fipe_price: number;
  price: number;
  description: string;
  cover_img: string;
  galery_id: number;
}

export interface IVehiclesProviderProps {
  children: React.ReactNode;
}
