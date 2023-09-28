// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Sidebar />
          <Routes>
            <Route
              path="/payroll-management/element-setup/elements"
              element={<Bills />}
            />
            <Route path="/dashboard/:userId/payments" element={<Payments />} />
            <Route path="/dashboard/:userId/budgets" element={<Budgets />} />
            <Route path="/payroll-management/element-setup/elements">
              <Route path={""} Component={<Elements />} />
              <Route path="edit-name" element={<EditName />} />
              <Route path="edit-email" element={<EditEmail />} />
              <Route path="edit-phone" element={<EditPhone />} />
              <Route path="edit-bills" element={<EditBills />} />
              <Route path="edit-payments" element={<EditPayments />} />
              <Route path="edit-budgets" element={<EditBudgets />} />
              <Route
                path="edit-billingDetails"
                element={<EditBillingDetails />}
              />
            </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
