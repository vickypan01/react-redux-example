// useAutoSuggest.ts
import { useEffect, useState, useRef } from "react";

export interface AutoSuggestOption {
  [key: string]: any;
}

interface UseAutoSuggestProps<T> {
  value: string;
  minChars?: number;
  delay?: number;
  fetchSuggestions: (input: string) => Promise<T[]>;
}

export function useAutoSuggest<T extends AutoSuggestOption>({
  value,
  minChars = 2,
  delay = 500,
  fetchSuggestions,
}: UseAutoSuggestProps<T>) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (inputValue.trim().length < minChars) {
      setSuggestions([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      const data = await fetchSuggestions(inputValue.trim());
      setSuggestions(data);
      setLoading(false);
    }, delay);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [inputValue]);

  return {
    inputValue,
    setInputValue,
    suggestions,
    setSuggestions,
    loading,
  };
}
