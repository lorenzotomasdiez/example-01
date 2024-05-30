import { forwardRef } from "react";
import { cn } from "../../utils";
import { FieldError } from "react-hook-form"

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}
const PayorcInput = forwardRef<HTMLInputElement, Props>(({
  name,
  label,
  className,
  inputClassName,
  labelClassName,
  error,
  ...others
}, ref) => {
  const id = `payorc-input-${name}`
  return (
    <div className={cn(
      "flex flex-col",
      className
    )}
    >
      {
        label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-normal leading-normal mb-3",
              labelClassName
            )}
          >
            {label}
          </label>
        )
      }
      <div className="p-3 border border-purple-200 rounded-lg bg-white">
        <input
          id={id}
          ref={ref}
          {...others}
          className={cn(
            "w-full bg-transparent border-none outline-none",
            inputClassName
          )}
        />
      </div>
      {
        error && (
          <div className="mt-2">
            <p className="text-red-500">{error.message}</p>
          </div>
        )
      }
    </div>
  )
})

export default PayorcInput;