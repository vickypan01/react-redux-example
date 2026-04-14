import React from "react";
import { getDummyUserTableColumns } from "./tableColumns";
import { useGetDummyUserDetailsQuery } from "../../Features/Services/freerandom_usersapi";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TableWithDetailPopup: React.FC = () => {
  const { data, isLoading, isError } = useGetDummyUserDetailsQuery();
  const dummyUserTableColumns = getDummyUserTableColumns();
  ModuleRegistry.registerModules([AllCommunityModule]);

  console.log("Fetched data:", data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data.</div>;

  return (
    <div className="container mt-4">
      <h1 className="display-6">Table with Detail Popup</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: "600px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={dummyUserTableColumns as any}
          rowData={data?.users || []}
          pagination={true}
          paginationAutoPageSize={true}
          onRowClicked={(params) =>
            alert(`You clicked on ${params.data.firstName}'s row!`)
          }
        />
      </div>
    </div>
  );
};

export default TableWithDetailPopup;
