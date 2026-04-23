import React, { useEffect, useState, useRef } from "react";

interface AutoSuggestProps<T> {
  value: string | number;
  onChange: (value: string, option?: T) => void;
  fetchSuggestions: (input: string) => Promise<T[]>;
  labelField: keyof T;
  placeholder?: string;
}

function AutoSuggest<T>({
  value,
  onChange,
  fetchSuggestions,
  labelField,
  placeholder,
}: AutoSuggestProps<T>) {
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [show, setShow] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const inputValue = String(value);

    if (!inputValue.trim()) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      const result = await fetchSuggestions(inputValue);
      setSuggestions(result);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [value, fetchSuggestions]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    }

    if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    const selected = suggestions[highlightIndex];

    if (selected) {
      onChange(String(selected[labelField]), selected);
      setShow(false);
    }
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", padding: "8px" }}
      />

      {show && suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            border: "1px solid #ccc",
            width: "100%",
            background: "#fff",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              onMouseDown={() => {
                onChange(String(item[labelField]), item);
                setShow(false);
              }}
              style={{
                padding: "8px",
                background: index === highlightIndex ? "#eee" : "#fff",
                cursor: "pointer",
              }}
            >
              {String(item[labelField])}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoSuggest;
