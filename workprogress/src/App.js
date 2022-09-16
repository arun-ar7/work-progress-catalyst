import "./App.css";
import AuthenticatePage from "./Pages/AuthenticatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ValueProvider } from "./context/ValueContext";

function App() {
  return (
    <>
      <ValueProvider>
        <Router>
          <Routes>
            <Route path="/app/signin" element={<AuthenticatePage />} />
          </Routes>
        </Router>
      </ValueProvider>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
