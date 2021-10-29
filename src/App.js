import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddPackage from "./components/AddPackage/AddPackage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import MyBooking from "./components/MyBooking/MyBooking";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/my-booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manage-order">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/add-package">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/package-details/:id">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
