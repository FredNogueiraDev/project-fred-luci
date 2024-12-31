import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({isLoading, disabled, children, ...props}: ButtonProps) {
  return (
    <button
    disabled={isLoading || disabled}
    className="w-full bg-purple-normal rounded-lg border border-white-300 px-3 h-[52px]
    text-white font-medium focus-visible:outline-none hover:bg-purple-normalHover
    disabled:bg-purple-normalHover"
    {...props}
    >
    {!isLoading && children}
    </button>
  )
}
