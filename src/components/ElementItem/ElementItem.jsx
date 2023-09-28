import "./ElementItem.scss";

// eslint-disable-next-line react/prop-types
function ElementItem({ cell }) {
  // eslint-disable-next-line react/prop-types
  return <div className="elementItem">{cell.render("Cell")}</div>;
}

export default ElementItem;
