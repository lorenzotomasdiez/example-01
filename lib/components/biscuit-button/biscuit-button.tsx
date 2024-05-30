import { forwardRef } from "react";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary";
}

const BiscuitButton = forwardRef<HTMLButtonElement, Props>(({ children, type = "button", ...others }, ref) => {
  return (
    <button
      className="bg-purple-200 w-full p-3 text-payorc-violet-dark text-base font-medium rounded-full"
      ref={ref}
      type={type}
      {...others}
    >
      {children}
    </button>
  )
})

export default BiscuitButton;