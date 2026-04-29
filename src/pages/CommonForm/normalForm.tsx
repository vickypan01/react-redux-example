import React from "react";
import TextInput from "../../common_components/textInput";
import SelectBox from "../../common_components/selectBox";
import CheckBox from "../../common_components/checkBox";
import { useForm } from "react-hook-form";
import AutoSuggest from "../../common_components/AutoSuggestCommonComponent/autoCompleteSearch";
import {
  useGetEodDataQuery,
  useLazyGetEodDataQuery,
} from "../../Features/Services/market_stackapi";
import type { Stock } from "../../DataTypes/types";
import Common_Loader from "../../common_components/loader";

const NormalStaticForm: React.FC = () => {
  const [stockInput, setStockInput] = React.useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      experience: "",
      termsConditions: false,
      stockSymbol: "",
    },
  });

  const AddFormSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const {
    data: marhetData,
    isLoading,
    isError,
  } = useGetEodDataQuery(stockInput, {
    skip: stockInput.length < 2,
  });
  const [trigger] = useLazyGetEodDataQuery();
  const termsRegister = register("termsConditions");
  const handleTermsChange = (data: { name: string; value: boolean }) => {
    termsRegister.onChange({ target: { name: data.name, value: data.value } });
  };

  const fetchStockSuggestions = async (input: string): Promise<Stock[]> => {
    if (!input) return [];

    const result = await trigger(input).unwrap();

    return result?.data || [];
  };

  if (isLoading)
    return (
      <>
        <Common_Loader />
        <p>Loading users...</p>
      </>
    );
  if (isError) return <p>Error fetching users.</p>;

  return (
    <div>
      <h1 className="display-6">Normal Static Form Component</h1>
      <p>This is the Normal Static Form page.</p>
      <form onSubmit={handleSubmit(AddFormSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <AutoSuggest
              value={stockInput}
              labelField="symbol"
              onChange={(value, option) => {
                setStockInput(value);
              }}
              fetchSuggestions={fetchStockSuggestions}
              placeholder="Type stock symbol..."
            />
          </div>
          <div className="col-md-6">
            <label>First Name:</label>
            <TextInput
              placeholder="Enter your First name"
              error={errors.firstName?.message}
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 3, message: "Min 3 chars" },
              })}
            />
          </div>
          <div className="col-md-6">
            <label>Last Name:</label>
            <TextInput
              {...register("lastName")}
              placeholder="Enter your Last name"
            />
          </div>
          <div className="col-md-12">
            <label>Experience:</label>
            <SelectBox
              {...register("experience")}
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
              onChange={handleTermsChange}
              name="termsConditions"
              identifier="terms-conditions"
              label=" Terms and Conditions Accepted"
              className="form-check-input"
            />
          </div>
          <div className="col-md-12">
            <input
              type="submit"
              className="btn btn-primary"
              value={isSubmitted ? "Form Submitted..." : "Submit"}
              disabled={isSubmitted}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalStaticForm;
