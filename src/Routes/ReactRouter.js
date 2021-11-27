import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Header from "../pages/Shared/Header/Header";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Footer from "../pages/Shared/Footer/Footer";
import Doctors from "../pages/Doctors/Doctors";
import Diagnosis from "../pages/Diagnosis/Diagnosis";
import Career from "../pages/Career/Career";
import ContactUs from "../pages/Contact Us/ContactUs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AuthProvider from "../contexts/AuthProvider";
import PrivateRoute from "../pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const ReactRouter = () => {
  console.log("router");
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/doctor">
            <Doctors></Doctors>
          </Route>
          <Route path="/diagonosis">
            <Diagnosis></Diagnosis>
          </Route>
          <Route exact path="/career">
            <Career></Career>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute exact path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Footer></Footer>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
};

export default ReactRouter;
