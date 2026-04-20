import React from "react";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectBoxProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
}

const SelectBox = React.forwardRef<HTMLSelectElement, SelectBoxProps>(
  (
    {
      label,
      name,
      value,
      onChange,
      onBlur,
      options,
      placeholder = "Select an option",
      disabled = false,
      required = false,
      error,
      className = "form-control",
    },
    ref,
  ) => {
    return (
      <span>
        {label && <label htmlFor={name}>{label}</label>}
        <select
          id={name}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={className + ` select-field ${error ? "select-error" : ""}`}
        >
          <option value="">{placeholder}</option>

          {options.map((opt) => (
            <option key={opt.value.toString()} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="d-block error-text text-danger">{error}</p>}
      </span>
    );
  },
);

export default SelectBox;
