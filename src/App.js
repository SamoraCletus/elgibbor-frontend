import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import PrintDebtorsList from "./pages/PrintDebtorsList";

// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

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
