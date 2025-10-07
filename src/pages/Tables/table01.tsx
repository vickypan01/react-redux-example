import React, { useMemo } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useGetRandomUserDetailsQuery } from "../../Features/Services/freerandom_usersapi";
import Common_Loader from "../../common_components/loader";

const TableComponentZeroone: React.FC = () => {
  const { data, isLoading, isError } = useGetRandomUserDetailsQuery();
  const randomUserData = data?.data?.data || [];
  ModuleRegistry.registerModules([AllCommunityModule]);
  const tableColumns = useMemo(
    () => [
      { headerName: "ID", field: "id", sortable: true, filter: true },
      {
        headerName: "Full Name",
        valueGetter: (params: any) =>
          `${params.data.name?.title} ${params.data.name?.first} ${params.data.name?.last}`,
        sortable: true,
        filter: true,
      },
      { headerName: "Gender", field: "gender", sortable: true, filter: true },
      { headerName: "Email", field: "email", sortable: true, filter: true },
      { headerName: "Phone", field: "cell", sortable: true, filter: true },
      {
        headerName: "Address",
        valueGetter: (params: any) =>
          `${params.data.location?.street?.number} ${params.data.location?.street?.name}, ${params.data.location?.city}, ${params.data.location?.state}, ${params.data.location?.country}, ${params.data.location?.postcode}`,
      },
      {
        headerName: "Timezone",
        valueGetter: (params: any) =>
          params.data.location?.timezone?.description || "N/A",
      },
    ],
    []
  );

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

      {/* <div className="clearfix">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
                                                      <table className="table table-sm table-striped table-hover">
                                                        <thead>
                                                          <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Gender</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Address</th>
                                                            <th>Timezone</th>
                                                            <th>Action</th>
                                                          </tr>
                                                        </thead>
              <tbody>
                {randomUserData.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>
                      {user.name.title} {user.name.first} {user.name.last}
                    </td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.cell}</td>
                    <td>
                      {user.location.street.number} -{" "}
                      {user.location.street.name}
                      <br />
                      {user.location.city}
                      {user.location.state}
                      {user.location.country}
                      {user.location.postcode}
                    </td>
                    <td>{user.location.timezone.description}</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Select Team
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TableComponentZeroone;
