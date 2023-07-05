export interface ICarPriverProps {
  children: React.ReactNode;
}

export interface CarProviderValue {
  cars: Iproducts[];
  setCars: React.Dispatch<React.SetStateAction<Iproducts[]>>;
  LIMIT: number;
  total: number;
  paginationCount: () => void;
  page: number;
  pageAtual: number;
  previousCount: () => void;
  anterior: boolean;
  nav: boolean;
  openBtns: () => void;
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  closeFilter: () => void
}
export interface Iproducts {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: string;
  fuel: string;
  color: string;
  fipe_price: number;
  price: number;
  description: string;
  cover_img: string;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birth_date: string;
    description: string;
  };
  gallery: [
    {
      id: string;
      image_url: string;
      vehicleId: string;
    },
    {
      id: string;
      image_url: string;
      vehicleId: string;
    },
    {
      id: string;
      image_url: string;
      vehicleId: string;
    }
  ];
}
