import React from "react";

interface Props<T> {
  isOpen: boolean;
  suggestions: T[];
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  labelField: keyof T;
}

function AutoSuggestOptions<T>({
  isOpen,
  suggestions,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  labelField,
}: Props<T>) {
  if (!isOpen || suggestions.length === 0) return null;

  return (
    <ul {...getMenuProps()} className="options">
      {suggestions.map((item, index) => (
        <li
          key={index}
          {...getItemProps({ item, index })}
          className={highlightedIndex === index ? "highlighted" : ""}
        >
          {String(item[labelField])}
        </li>
      ))}
    </ul>
  );
}

export default AutoSuggestOptions;
