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
import Chart from "./Components/charts"
function App() {
  return (
    <Switch>
      <Route path="/Card">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Card />
              </div>
              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route exact path="/Button">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Button />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route exact path="/">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <AdminDashboard />
              </div>
              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route exact path="/Button">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Button />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/utilities-color">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <UtilitiesColor />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/utilities-border">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <UtilitiesBorder />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/utilities-animation">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <UtilitiesAnimation />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/utilities-other">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <UtilitiesOther />
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route exact path="/tables">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Table />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/charts">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Chart />
              </div>

              <div className="content-wrapper sticky-bottom">
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy;2021</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgot-password">
        <Forgot />
      </Route>
      <Route path="/404">
        <Error />
      </Route>

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



    </Switch>



  );
}

export default App;