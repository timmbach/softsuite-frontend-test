import { useDispatch, useSelector } from "react-redux";
import ElementItem from "../ElementItem/ElementItem";
import EmptyListImage from "../../assets/static/empty-list.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./ElementsTable.scss";
import { useEffect, useMemo } from "react";
import { getElements } from "../../features/elements/elementsSlice";
import { getElementLinks } from "../../features/elementLinks/elementLinksSlice";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

function ElementsTable() {
  const { elements, currentElementId, elementsCount, isLoading } = useSelector(
    (store) => store.elements
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElements());
    // dispatch(getLookups());
    dispatch(getElementLinks(currentElementId));
    // dispatch(getLookups());
  }, []);
  //   console.log(elements);

  // I am using the useMemo hook from react here to save time by ensuring that the apps does not repopulate already populated elements
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => elements, [elements]);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

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
    <table className="elementsTable" {...getTableProps()}>
      <thead className="elementsTable__head">
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              //   eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <FontAwesomeIcon
                  icon={faArrowRightArrowLeft}
                  style={{ marginLeft: "10px", transform: "rotate(90deg)" }}
                />
              </th>
            ))}
          </tr>
        ))}
      </thead>{" "}
      {isLoading ? (
        <span
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          Loading...
        </span>
      ) : (
        <tbody className="elementsTable__body" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td {...cell.getCellProps()}>
                      <ElementItem cell={cell} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}

export default ElementsTable;
