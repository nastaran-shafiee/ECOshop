import { inputInterface } from "../../types/interface";

function Input({
  type,
  className,
  classname2,
  clasname3,
  placeholder,
  text,
  error,
  validation,

  onChange,
}: inputInterface) {
  return (
    <div
      className={`w-[22.4rem] heigt-[4rem] p-2 border relative rounded-[0.2rem] ${clasname3}`}
    >
      <p
        className={`absolute top-[-0.9rem] z-50 bg-white w-[6.25rem] pl-2 ${classname2}`}
      >
        {text}
      </p>
      <input
        type={type}
        className={`border-none outline-none ${className}`}
        placeholder={placeholder}
        {...validation}
        onChange={onChange}
      />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}
export default Input;
