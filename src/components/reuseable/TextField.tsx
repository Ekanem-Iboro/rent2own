import React from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: "short" | "medium" | "long";
  value?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  disabled,
  value,
  variant = "long",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-3 ">
      <label
        htmlFor={name}
        className={clsx(
          "block text-[16px] leading-[19.2px] font-[500] mb-[8px] text-[#191919] capitalize",
          {
            "text-[#DA1E28]": errors[name],
          }
        )}
      >
        {label}
      </label>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={value}
        className={clsx(
          "block w-full border border-[#B7B7B7] rounded-md p-2 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed",
          {
            "w-full": variant == "long",
            "max-w-[319px]": variant == "medium",
            "max-w-[165px]": variant == "short",
            "border-[#DA1E28] focus:border-[#DA1E28]": errors[name],
            "disabled disabled:opacity-75 hover:cursor-not-allowed": disabled,
          }
        )}
        {...register(name)}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;
