// import { useDispatch, useSelector } from "react-redux";
import "./ElementItem.scss";
// import { getLookupValues } from "../../features/lookupsValue/lookupValuesSlice";
// import { useEffect, useState } from "react";
// import { getLookups } from "../../features/lookups/lookupsSlice";

// eslint-disable-next-line react/prop-types
function ElementItem({ cell, lookups }) {
  // const { lookupValues } = useSelector((store) => store.lookupValues);
  // const dispatch = useDispatch();

  // const [lookupId, setLookupId] = useState(0);

  // useEffect(() => {
  //   // dispatch(getElements());
  //   // dispatch(getLookups());
  //   // dispatch(getElementLinks(currentElementId));
  //   // dispatch(getLookups());

  //   dispatch(getLookupValues(lookupId));
  // }, [lookupId, dispatch]);

  // eslint-disable-next-line react/prop-types
  // console.log(cell);

  // console.log(lookups.data);
  // const { data } = lookups;
  // currentLookups.data.map((lookup) => {
  //   lookup.name === cell.column.Header && console.log(lookup);
  // });

  // console.log(
  //   lookups.data.filter((lookup) => lookup.name == cell.column.Header)
  // );

  // lookup.name === cell.column.Header && console.log(lookup);

  // if (
  //   cell.column.Header == "Element Category" ||
  //   cell.column.Header == "Element Classification"
  // ) {
  //   lookups.data?.map((lookup) => {
  //     // setLookupId(lookup.id);
  //     dispatch(getLookupValues(lookup.id));

  //     const currentLookup = lookupValues.data?.filter(
  //       (lookupValue) => lookupValue.lookupName === cell.column.Header
  //     );
  //     // console.log(currentLookup?.name);
  //     return (
  //       <div className="elementItem" key={lookup.id}>
  //         {currentLookup?.name}
  //       </div>
  //     );
  //   });
  // }
  // console.log(cell.value);

  // console.log(data[3]);
  // console.log(cell.column.Header);
  return <div className="elementItem">{cell.value}</div>;
}

export default ElementItem;
