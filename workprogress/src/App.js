import "./App.css";
import AuthenticatePage from "./Pages/AuthenticatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/app/signin" element={<AuthenticatePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
