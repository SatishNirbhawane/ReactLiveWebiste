import React from "react";
import web from "../images/grow.jpg";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Common from "../components/Common"

const Home = () => {
    return (<>
        <Common
            name='Grow your Business With '
            imgsrc={web}
            visit="/about"
            btnname="Gate Started" />


    </>);
}
export default Home;