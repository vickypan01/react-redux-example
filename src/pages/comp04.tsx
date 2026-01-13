import React, { useEffect } from "react";
import { useGetKitchenDataMutation } from "../Features/Services/freerandom_usersapi";
import Common_Loader from "../common_components/loader";

const CompZeroFour: React.FC = () => {
  const [getKitchenData, { data, isLoading, isError }] =
    useGetKitchenDataMutation();

  useEffect(() => {
    getKitchenData()
      .unwrap()
      .then((res) => {
        console.log("✅ Kitchen Data:", res);
      })
      .catch((err) => {
        console.error("❌ Error:", err);
      });
  }, []);

  if (isLoading)
    return (
      <>
        <Common_Loader />
        <p>Loading users...</p>
      </>
    );
  {
    isError && <p>Error fetching data.</p>;
  }
  console.log("useGetKitchenDataMutation", data);
  return (
    <>
      <h1 className="display-6">Fourth Component</h1>
      {data && (
        <pre style={{ background: "#f0f0f0", padding: "1rem" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </>
  );
};

export default CompZeroFour;
