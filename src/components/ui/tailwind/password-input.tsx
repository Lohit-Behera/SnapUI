import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<
  HTMLInputElement,
  {
    placeholder: string;
    id?: string;
    containerClassName?: string;
    className?: string;
    disabled?: boolean;
  }
>(
  (
    {
      placeholder,
      id,
      containerClassName,
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div
        className={cn(
          "relative flex h-9 w-full rounded-md border-zinc-100 dark:border-zinc-800 border border-input bg-zinc-50 dark:bg-zinc-950 shadow-sm transition-colors focus-within:ring-1 ring-zinc-900 dark:ring-zinc-100",
          containerClassName
        )}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={cn(
            "appearance-none text-sm rounded-md bg-transparent focus:outline-none w-full px-3 py-2 disabled:placeholder:opacity-70 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          id={id}
          disabled={disabled}
          {...props}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={`px-1 py-1 cursor-pointer absolute inset-y-0 right-0 flex items-center ${
            disabled && "pointer-events-none opacity-50"
          }`}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </span>
      </div>
    );
  }
);

export default PasswordInput;
