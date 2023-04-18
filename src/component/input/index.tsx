import { inputInterface } from "../../types/interface";

function Input({
  type,
  className,
  placeholder,
  text,
  onChange,
}: inputInterface) {
  return (
    <div className="w-[18.75rem] heigt-[4rem] p-2 border relative rounded-[0.2rem]">
      <p className="absolute top-[-0.9rem] z-50 bg-white w-[6.25rem] pl-2">
        {text}
      </p>
      <input
        type={type}
        className={`border-none outline-none ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
