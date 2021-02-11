import React from "react";
import web from "../images/webd.jpg";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Common from "../components/Common"

const AboutUS = () => {
    return (<>
        <Common
            name='Welcome in about page '
            imgsrc={web}
            visit="/contact"
            btnname="Contact Now" />
    </>);
}
export default AboutUS;