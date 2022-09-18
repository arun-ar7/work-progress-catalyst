import AuthenticatePage from "./Pages/AuthenticatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useValues } from "./context/ValueContext";
import PrivateRoute, {
  ProtectedRoute,
  PublicRoute,
} from "./routes/PrivateRoute";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";
import TeamAsLeader from "./Components/Home/TeamAsLeader";
import TeamViewPage from "./Pages/TeamViewPage";

function App() {
  const { userEmail } = useValues();
  const [teamsList, setTeamsList] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.post("/server/workpackage/getAllTeams");
        setTeamsList(res.data);
        console.log("result : ", res);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
    }
    getData();
  }, [null]);
  return (
    <>
      <Router>
        <Routes element={<PublicRoute />}>
          <Route path="/app/signin" element={<AuthenticatePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/app/" element={<HomePage />} />
          </Route>
          {teamsList.map((user, index) => {
            console.log(user.TeamnamesAndMembers.TeamName);
            return (
              <Route
                path={`/app/${user.TeamnamesAndMembers.TeamName}`}
                element={
                  <TeamViewPage team={user.TeamnamesAndMembers.TeamName} />
                }
                key={index}
              />
            );
          })}
        </Routes>

        {/* <Route element={<ProtectedRoute />} key={index}> */}
        {/* </Route> */}

        {/* <Route element={<ProtectedRoute />}>
            <Route path={`/members/`} element={<MemberForLeader />} />
          </Route> */}
      </Router>
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
