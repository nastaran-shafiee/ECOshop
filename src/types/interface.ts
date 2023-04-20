import { ChangeEvent } from "react";
export interface inputInterface {
  type?: string;
  className?: string;
  classname2?: string;
  placeholder?: string;
  clasname3?: string;
  text?: string;
  error?: string | any;
  validation?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface buttonInterface {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
export interface authInterface {
  username: string;
  password: string;
}
export interface fetchDataInterface {
  url?: string;
  category?: string | undefined;

  sort?: string | undefined;
}
export interface ProductInterface {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  count?: number;
}
