/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
    {...props}
    ref={ref}
    className="w-full rounded-lg border border-black-300 px-3 h-[52px]
    placeholder:text-black-300 text-white-300 hover:border-purple-normalActive
    focus:outline focus:-outline-offset-2 outline:border-purple-normalActive"
    />
  )
})
