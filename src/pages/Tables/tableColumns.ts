// columns.ts
// columns.ts
import type { ColDef } from "ag-grid-community";

export const getUserTableColumns = () => [
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
];

export const getDummyUserTableColumns = (): ColDef[] => [
  { headerName: "ID", field: "id", sortable: true, filter: true, width: 80 },
  {
    headerName: "Full Name",
    sortable: true,
    filter: true,
    valueGetter: (params: any) =>
      `${params.data.firstName} ${params.data.lastName}`,
  },
  { headerName: "Gender", field: "gender", sortable: true, filter: true },
  { headerName: "Email", field: "email", sortable: true, filter: true },
  { headerName: "Phone", field: "phone", sortable: true, filter: true },
  {
    headerName: "Age",
    field: "age",
    sortable: true,
    filter: true,
  },
  {
    headerName: "IP Address",
    field: "ip",
    sortable: true,
    filter: true,
    width: 150,
  },
];
