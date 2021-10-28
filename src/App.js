import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService/AddService";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";

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
            <Route path="/add-service">
              <AddService></AddService>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
