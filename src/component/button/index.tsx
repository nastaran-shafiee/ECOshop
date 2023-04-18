import { buttonInterface } from "../../types/interface";

function ButtonComponent({
  title,
  className,
  onClick,
  type,
  disabled,
}: buttonInterface) {
  return (
    <button
      className={`w-[11.6rem]  h-[2.69rem] bg-button text-white rounded-[0.4rem] ${className}`}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
export default ButtonComponent;
