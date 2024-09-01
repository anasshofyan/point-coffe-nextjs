import React, { InputHTMLAttributes, forwardRef } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    error?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ id, label, error, className, required, ...props }, ref) => {
        return (
            <div className="mb-4">
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}{" "}
                    {required && <span className="text-red-600">*</span>}
                </label>
                <input
                    id={id}
                    ref={ref}
                    className={`w-full px-3 py-2 mt-1 border ${error ? "border-red-600" : "border-gray-300"} rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
                    required={required}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        )
    }
)

TextField.displayName = "TextField"

export default TextField
