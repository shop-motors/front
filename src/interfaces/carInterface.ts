export interface ICarPriverProps {
  children: React.ReactNode;
}

export interface CarProviderValue {
  cars: Iproducts[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  marcas: Imarca[];
}

export interface Imarca {
  label: string;
  value: string;
}
export interface Iproducts {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: string;
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
