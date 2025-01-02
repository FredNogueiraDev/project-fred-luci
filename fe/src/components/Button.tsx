import { ComponentProps } from "react";
import { Spinner } from "./Spinner";

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
    {isLoading && <Spinner className="h-6 w-6 mx-auto my-0 text-black-300 animate-spin fill-purple-normal" />    }
    </button>
  )
}
