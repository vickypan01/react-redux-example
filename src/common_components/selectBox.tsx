import React from "react";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectBoxProps {
  label?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  required = false,
  error,
  className = "",
}) => {
  return (
    <span>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={className + ` select-field ${error ? "select-error" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value.toString()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="d-block error-text text-danger">{error}</p>}
    </span>
  );
};

export default SelectBox;
