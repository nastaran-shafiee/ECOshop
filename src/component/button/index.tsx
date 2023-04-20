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
      className={`w-[11.6rem] h-[2.69rem] bg-button rounded-[0.4rem] ${className} text-white`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default ButtonComponent;
