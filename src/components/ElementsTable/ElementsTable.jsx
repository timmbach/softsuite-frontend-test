import { useDispatch, useSelector } from "react-redux";
import ElementItem from "../ElementItem/ElementItem";
import EmptyListImage from "../../assets/static/empty-list.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faChevronLeft,
  faChevronRight,
  faEye,
  faPenToSquare,
  faTrashCan,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./ElementsTable.scss";
import { useEffect, useMemo, useState } from "react";
import { getElements } from "../../features/elements/elementsSlice";
import { getElementLinks } from "../../features/elementLinks/elementLinksSlice";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import { getLookups } from "../../features/lookups/lookupsSlice";

function ElementsTable() {
  const { elements, currentElementId, elementsCount, isLoading } = useSelector(
    (store) => store.elements
  );

  const [actionOpen, setActionOpen] = useState(false);
  const { lookups } = useSelector((store) => store.lookups);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElements());
    dispatch(getLookups());
    dispatch(getElementLinks(currentElementId));
    //   // dispatch(getLookups());
  }, []);
  // console.log(lookups);

  // I am using the useMemo hook from react here to save time by ensuring that the apps does not repopulate already populated elements
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => elements, [elements]);
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      // initialState: { pageSize },
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setPageSize,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  // const initialPageSize = pageSize;

  const pageList = [];
  const lookupList = lookups;

  for (let pageNumber = 1; pageNumber < pageCount.length + 1; pageNumber++) {
    pageList.push(
      <button onClick={() => gotoPage(pageNumber)} key={pageNumber}>
        {pageNumber}
      </button>
    );
  }

  if (elementsCount < 1 && isLoading === false) {
    return (
      <section className="emptyElementsTable">
        <img
          className="emptyElementsTable__img"
          src={EmptyListImage}
          alt="empty list image"
        />
        <p className="emptyElementsTable__info">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            style={{ color: "red" }}
          />
          <span>There are no elements to display</span>
        </p>
      </section>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <table className="elementsTable" {...getTableProps()}>
        <thead className="elementsTable__head">
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                //   eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.render("Header") !== "Action" && (
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      style={{
                        marginLeft: "10px",
                        transform: "rotate(90deg)",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td>
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "30px 0px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Loading...
                </span>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="elementsTable__body" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    // eslint-disable-next-line react/jsx-key
                    if (cell.column.Header == "Action") {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          {...cell.getCellProps()}
                          style={{ position: "relative" }}
                        >
                          {/* {actionOpen && (
                            <div
                              style={{
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                // top: "0",
                                bottom: "30px",
                                width: "100px",
                                boxShadow:
                                  "1px 39px 19px -5px rgba(0,0,0,0.16)",
                                backgroundColor: "white",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  color: "#2d416f",
                                  alignItems: "center",
                                }}
                              >
                                <FontAwesomeIcon icon={faEye} />
                                <span>View Element Links</span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  color: "#2d416f",
                                  alignItems: "center",
                                }}
                              >
                                <FontAwesomeIcon icon={faPenToSquare} />
                                <span>Edit Element</span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  color: "red",
                                  alignItems: "center",
                                }}
                              >
                                <FontAwesomeIcon icon={faTrashCan} />
                                <span>Delete Element</span>
                              </div>
                            </div>
                          )} */}
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textAlign: "center",
                            }}
                          >
                            <button
                              style={{
                                border: "2px solid green",
                                background: "none",
                                borderRadius: "5px",
                                height: "18px",
                                width: "18px",
                                fontWeight: "bold",
                                color: "green",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                cursor: "pointer",
                              }}
                              onClick={() => setActionOpen(!actionOpen)}
                            >
                              <span>...</span>
                            </button>
                          </div>
                        </td>
                      );
                    }
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <td {...cell.getCellProps()}>
                        <ElementItem cell={cell} lookups={lookupList} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <div className="elementsFooter">
        <div className="elementsFooter__pageSize">
          <strong>Showing</strong>
          <span>
            {/* <input
              type="number"
              defaultValue={pageIndex + 1}
              className="elementsFooter__pageSize_input"
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            /> */}
            <select
              // value={pageSize}
              className="elementsFooter__pageSize_input"
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10].map((newSize) => (
                <option key={newSize} value={newSize}>
                  {newSize}
                </option>
              ))}
            </select>
          </span>
          <strong>Out of {elementsCount}</strong>
        </div>
        <div className="elementsFooter__pageNav">
          <button
            className="elementsFooter__pageNav_left"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ width: "12px" }} />
          </button>
          <div className="">{pageList}</div>

          <button
            className="elementsFooter__pageNav_right"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ElementsTable;
