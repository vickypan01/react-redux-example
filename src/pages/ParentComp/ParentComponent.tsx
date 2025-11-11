import React, { useState } from "react";

let nameList = [
  "Vikas Pandey",
  "Anshita Pandey",
  "Vasu Pandey",
  "Vaishnavi Pandey",
  "Arun Updhyay",
  "Vihan Upadhyay",
  "Likhit Verma",
  "Santosh",
  "Shikhil",
];

const ParentComponent: React.FC = () => {
  const [input, setInput] = useState("");
  const [filteredNames, setFilteredNames] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setFilteredNames([]);
      return;
    } else {
      const filteredValue = nameList.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(filteredValue);
    }
  };

  const handleSelect = (name: string) => {
    setInput(name);
    setFilteredNames([]);
  };

  return (
    <div>
      <h1 className="display-6">Parent Component</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Type the name..."
            className="form-control"
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>

      {filteredNames.length > 0 && (
        <ul className="card">
          {filteredNames.map((name, index) => (
            <li
              className="list-none"
              key={index}
              style={{ cursor: "pointer", padding: "5px 0" }}
              onClick={() => handleSelect(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParentComponent;
