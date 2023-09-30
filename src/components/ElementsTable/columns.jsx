export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Element Category",
    accessor: "categoryValueId",
  },
  {
    Header: "Element Classification",
    accessor: "classificationValueId",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Date & Time Modified",
    accessor: "updatedAt",
  },
  {
    Header: "Modified By",
    accessor: "modifiedBy",
  },
  {
    accessor: "action",
    Header: "Action",
    // Cell: ({ row: { original } }) => (
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       textAlign: "center",
    //     }}
    //   >
    //     <button
    //       style={{
    //         border: "2px solid green",
    //         background: "none",
    //         borderRadius: "5px",
    //         height: "18px",
    //         width: "18px",
    //         fontWeight: "bold",
    //         color: "green",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //       }}
    //     >
    //       <span>...</span>
    //     </button>
    //   </div>
    // ),
  },
];
