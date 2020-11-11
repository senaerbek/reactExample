import Navi from "../Navbar/Navbar";
import LeftNav from "../Navbar/LeftNav";
import { Route, Switch } from "react-router-dom";
import PersonDetail from "../Persons/personDetail"
import MezuniyetPersonDetail from "../Persons/MezuniyetPersonDetail"
import BasvuruEkle from "../Basvurular/BasvuruEkle";
import login from "../Login/LoginC";
import Register from "../Login/Register";

const { Container } = require("reactstrap");
const { default: Dashboard } = require("./Dashboard");


function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
