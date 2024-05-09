import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Main } from "./pages/main/Main";
import { SignIn } from "./pages/signIn/signIn";
import { Header } from "./componets/header";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/temp" element={<temp />} />
      </Routes>
    </Router>
  );
}

export default App;
