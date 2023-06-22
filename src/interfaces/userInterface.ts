export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface IProviderValue {
  LoginUser: (formLogin: IUserLogin) => Promise<IuserResponse | undefined>;
  user: IuserResponse | null;
}

export interface IuserResp {
  id: number;
  name: string;
  email: string;
}

export interface IuserResponse {
  token: string;
  user: IuserResp;
}

export interface IUserLogin {
  email: string;
  password: string;
}
