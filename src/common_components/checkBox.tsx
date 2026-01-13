import React from "react";

interface CheckBoxProps {
  name: string;
  identifier: string;
  value?: boolean;
  label?: string;
  isDisabled?: boolean;
  className?: string;
  error?: string;
  isEditable?: boolean;
  onChange?: (data: { name: string; value: boolean }) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  onChange = () => {},
  value = false,
  label = "",
  isDisabled = false,
  identifier,
  className = "",
  error = "",
  isEditable = true,
}) => {
  const EditableView = (
    <div>
      <input
        type="checkbox"
        name={name}
        className={`filled-in ${className}`}
        checked={value}
        onChange={(event) => onChange({ name, value: event.target.checked })}
        disabled={isDisabled}
        id={identifier}
      />

      <label htmlFor={identifier} className="ml-5">
        {label}
      </label>

      {!!error && (
        <div className="error-container">
          <label className="error">{error}</label>
        </div>
      )}
    </div>
  );

  const ReadonlyView = <span className="pre-wrap">{value ? "Yes" : "No"}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

export default CheckBox;
