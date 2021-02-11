import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import TodoList from "./components/TodoList";
import AboutUs from "./components/AboutUS";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import AboutUS from "./components/AboutUS";
import Blog from "./components/Blog";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' ><Home /></Route>
        <Route exact path='/services' component={Services}><Services /></Route>
        <Route exact path='/blog' component={Blog}><Blog /></Route>
        <Route exact path='/about' component={AboutUS}><AboutUS /></Route>
        <Route exact path='/contact' component={ContactUs}><ContactUs /></Route>
      </Switch>
      <Footer />
    </>
  );


};
export default App;