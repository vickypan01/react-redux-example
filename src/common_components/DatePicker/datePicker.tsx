import React, { useState } from "react";

type DatePickerProps = {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  minYear?: number;
  maxYear?: number;
  minMonth?: number; // 0-11
  maxMonth?: number; // 0-11
};

const CustomDatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minYear,
  maxYear,
  minMonth,
  maxMonth,
}) => {
  const [show, setShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(value || new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const generateYears = () => {
    const start = minYear || year - 50;
    const end = maxYear || year + 50;
    const years = [];

    for (let y = start; y <= end; y++) {
      years.push(y);
    }

    return years;
  };

  const isDisabled = (date: Date) => {
    const y = date.getFullYear();
    const m = date.getMonth();

    if (minYear && y < minYear) return true;
    if (maxYear && y > maxYear) return true;

    if (minMonth !== undefined && y === minYear && m < minMonth) return true;

    if (maxMonth !== undefined && y === maxYear && m > maxMonth) return true;

    return false;
  };

  const getDays = () => {
    const start = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < start; i++) {
      days.push(null);
    }

    for (let d = 1; d <= totalDays; d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(year, month + offset, 1);
    if (isDisabled(newDate)) return;
    setCurrentDate(newDate);
  };

  const handleYearChange = (newYear: number) => {
    const newDate = new Date(newYear, month, 1);

    if (isDisabled(newDate)) return;

    setCurrentDate(newDate);
  };

  return (
    <div style={{ position: "relative", width: 260 }}>
      <input
        value={value ? value.toDateString() : ""}
        readOnly
        onClick={() => setShow((prev) => !prev)}
        className="form-control"
      />

      {show && (
        <div
          style={{
            position: "absolute",
            background: "#fff",
            border: "1px solid #ccc",
            padding: 10,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={() => changeMonth(-1)}>◀</button>

            <div style={{ display: "flex", gap: 8 }}>
              <span>
                {currentDate.toLocaleString("default", {
                  month: "long",
                })}
              </span>

              <select
                value={year}
                onChange={(e) => handleYearChange(Number(e.target.value))}
              >
                {generateYears().map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={() => changeMonth(1)}>▶</button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              marginTop: 10,
            }}
          >
            {getDays().map((date, idx) => {
              if (!date) return <div key={idx}></div>;

              const disabled = isDisabled(date);

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (disabled) return;
                    onChange(date);
                    setShow(false);
                  }}
                  style={{
                    padding: 6,
                    textAlign: "center",
                    cursor: disabled ? "not-allowed" : "pointer",
                    color: disabled ? "#ccc" : "#000",
                  }}
                >
                  {date.getDate()}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
