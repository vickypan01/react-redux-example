import React, { useRef } from "react";
import TextInput from "../../common_components/textInput";
import SelectBox from "../../common_components/selectBox";
import CheckBox from "../../common_components/checkBox";

const CommonFormCheck = () => {
  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string) => {
    console.log(content);
  };

  return (
    <div>
      <h1 className="display-6">Common Form Check Component</h1>
      <p>This is the Common Form Check page.</p>
      <div className="row">
        <div className="col-md-12">
          <label>Full Name:</label>
          <TextInput
            name="Usname"
            value=""
            placeholder="Enter your username"
            onChange={() => {}}
          />
        </div>
        <div className="col-md-12">
          <label>Experience:</label>
          <SelectBox
            name={""}
            value={""}
            onChange={() => {}}
            options={[
              { label: "Select Age", value: "" },
              { label: "14", value: "14" },
              { label: "15", value: "15" },
              { label: "16", value: "16" },
              { label: "17", value: "27" },
              { label: "18", value: "18" },
              { label: "19", value: "19" },
              { label: "20", value: "20" },
              { label: "21", value: "21" },
            ]}
          />
        </div>
        <div className="col-md-12">
          <label>Accept Terms:</label>
        </div>
        <div className="col-md-12 form-check mb-3 mt-3">
          <CheckBox
            name="terms-conditions"
            identifier="terms-conditions"
            value={false}
            label=" Terms and Conditions Accepted"
            className="form-check-input"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonFormCheck;
