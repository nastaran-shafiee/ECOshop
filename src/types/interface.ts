import { ChangeEvent } from "react";
export interface inputInterface {
  type?: string;
  className?: string;
  placeholder?: string;
  text?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface buttonInterface {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
