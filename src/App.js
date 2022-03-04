import './App.css';
import DashboardSidebar from './Components/DashboardSidebar';
import DashboardNavbar from './Components/DashboardNavbar';
import AdminDashboard from './Components/AdminDashboard';
import Button from './Components/button';
import UtilitiesColor from './Components/utilities-color';
import UtilitiesBorder from './Components/utilities-border';
import UtilitiesAnimation from './Components/utilities-animation';
import UtilitiesOther from './Components/utilities-other';
import { Switch, Route } from "react-router-dom";
import Card from './Components/card';
import Login from './Components/login';
import Register from './Components/register';
import Forgot from './Components/forgot';
import Error from './Components/404';
import Blank from './Components/Blank';
import Table from './Components/table';
import Chart from "./Components/charts";

//  <!-- APP component --> 

function App() {
  return (

    <Switch>
      {/* <!-- login page -->  */}

      <Route path="/login">
        <Login />
      </Route>

      {/* <!-- blank page -->  */}

      <Route exact path="/blank">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Blank />
              </div>
            </div>
          </div>
        </div>
      </Route>

      {/* <!-- register page -->  */}

      <Route path="/register">
        <Register />
      </Route>
      {/* <!-- forgot-password page -->  */}

      <Route path="/forgot-password">
        <Forgot />
      </Route>

      {/* <!-- utilities-404 page -->  */}

      <Route path="/404">
        <Error />
      </Route>

      {/* <!-- Home page -->  */}

      <div id="wrapper">
        <DashboardSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <DashboardNavbar />

            <Route exact path="/">
              <div className="container-fluid">
                <AdminDashboard />
              </div>
            </Route>

            {/* <!-- button page -->  */}

            <Route exact path="/Button">
              <div className="container-fluid">
                <Button />
              </div>
            </Route>

            {/* <!-- Card page-->  */}
            <Route path="/Card">
              <div className="container-fluid">
                <Card />
              </div>
            </Route>


            {/* <!-- UtilitiesColor page -->  */}

            <Route exact path="/utilities-color">
              <div className="container-fluid">
                <UtilitiesColor />
              </div>
            </Route>

            {/* <!-- UtilitiesBorder page -->  */}

            <Route exact path="/utilities-border">
              <div className="container-fluid">
                <UtilitiesBorder />
              </div>
            </Route>
            {/* <!-- UtilitiesAnimation page -->  */}

            <Route exact path="/utilities-animation">
              <div className="container-fluid">
                <UtilitiesAnimation />
              </div>
            </Route>


            {/* <!-- utilities-other page -->  */}
            <Route exact path="/utilities-other">
              <div className="container-fluid">
                <UtilitiesOther />
              </div>
            </Route>

            {/* <!-- table page -->  */}

            <Route exact path="/tables">
              <div className="container-fluid">
                <Table />
              </div>
            </Route>

            {/* <!-- charts page -->  */}
            <Route exact path="/charts">
              <div className="container-fluid">
                <Chart />

              </div>
            </Route>
          </div>
        </div>
      </div>
    </Switch>
  );
}
export default App;