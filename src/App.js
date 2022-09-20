import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import PrintDebtorsList from "./pages/PrintDebtorsList";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Layout />} />
        <Route
          path="/:classNumber/printdebtorslist"
          element={<PrintDebtorsList />}
        />
      </Routes>
    </div>
  );
}

export default App;
