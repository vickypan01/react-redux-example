import { useState, useEffect } from "react";

const API_URL = "https://dummyjson.com/products/search?q=";

type Product = {
  id: number;
  title: string;
};

function ComponentFive() {
  const [inputText, setInputText] = useState("");
  const [APIResponse, setAPIResponse] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState<Record<string, Product[]>>({});

  const fetchData = async (query: string) => {
    if (cache[query]) {
      console.log("Cache Returned value : ", query);
      setAPIResponse(cache[query]);
      return;
    }

    const apiData = await fetch(API_URL + inputText);
    const result = await apiData.json();

    const products = result?.products || [];

    setAPIResponse(products);
    console.log("API Hit : ", inputText);
    setCache((prev) => ({
      ...prev,
      [inputText]: products,
    }));
  };

  useEffect(() => {
    if (!inputText.trim()) {
      setAPIResponse([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchData(inputText);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <div className="row">
      <div className="col-lg-5">
        <h1>Autosuggest Input Box</h1>

        <input
          type="text"
          placeholder="Type to Search"
          className="form-control"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => {
            setTimeout(() => setShowResults(false), 200);
          }}
        />

        {showResults && (
          <div className="card mt-2">
            {APIResponse.map((list) => (
              <span key={list.id}>{list.title}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentFive;
