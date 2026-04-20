import React from "react";

export interface TextInputProps {
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
  error?: string | undefined;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
  disabled = false,
  error,
  className = "form-control",
  ...rest
}) => {
  return (
    <span>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
        className={className + " input-field " + (error ? "input-error" : "")}
        {...rest}
      />
      {error && <p className="d-block error-text text-danger">{error}</p>}
    </span>
  );
};

export default TextInput;
