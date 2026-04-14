import React, { useMemo } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getUserTableColumns } from "./tableColumns";
import { useGetRandomUserDetailsQuery } from "../../Features/Services/freerandom_usersapi";
import Common_Loader from "../../common_components/loader";

const TableComponentZeroone: React.FC = () => {
  const { data, isLoading, isError } = useGetRandomUserDetailsQuery();
  const randomUserData = data?.data?.data || [];
  ModuleRegistry.registerModules([AllCommunityModule]);
  const tableColumns = useMemo(() => getUserTableColumns(), []);

  if (isLoading)
    return (
      <>
        <Common_Loader />
        <p>Loading users...</p>
      </>
    );
  if (isError) return <p>Error fetching users.</p>;

  return (
    <>
      <h1 className="display-6">Table Component</h1>

      <div
        className="ag-theme-quartz"
        style={{ height: "350px", width: "100%", overflow: "scroll" }}
      >
        <AgGridReact
          columnDefs={tableColumns as any}
          rowData={randomUserData}
          pagination={true}
        />
      </div>
    </>
  );
};

export default TableComponentZeroone;
