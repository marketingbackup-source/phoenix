import { ChevronDown } from "lucide-react";

export default function BaseSelect({
  name,
  placeholder,
  options,
  register,
  error,
  className = "",
}) {
  return (
    <div>
      <div className="relative">
        <select
          defaultValue=""
          aria-label={placeholder}
          className={`w-full appearance-none border border-gray-200 bg-white px-5 py-3 pr-12 text-[#232323] outline-none transition focus:border-[var(--color-red-3)] ${className}`}
          {...register(name)}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-white text-[#232323]"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-gray-2)]"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-[var(--color-red-1)]">
          {error.message}
        </p>
      )}
    </div>
  );
}