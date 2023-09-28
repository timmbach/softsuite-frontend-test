import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getElements } from "../features/elements/elementsSlice";
// import { getLookups } from "../features/lookups/lookupsSlice";

function Root() {
  // const { elements, isLoading } = useSelector((store) => store.elements);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getElements());
  //   dispatch(getLookups());
  //   // console.log(elements);
  // }, [elements]);

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div className="" style={{ display: "flex", width: "100vw" }}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
