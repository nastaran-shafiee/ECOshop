import { ChangeEvent } from "react";
export interface inputInterface {
  type?: string;
  className?: string;
  placeholder?: string;
  text?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
