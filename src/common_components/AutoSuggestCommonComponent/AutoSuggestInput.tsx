import React from "react";

interface Props {
  inputProps: any;
  loading?: boolean;
}

const AutoSuggestInput: React.FC<Props> = ({ inputProps, loading }) => {
  return (
    <div className="input-wrapper">
      <input {...inputProps} />
      {loading && <span className="loader">Loading...</span>}
    </div>
  );
};

export default AutoSuggestInput;
