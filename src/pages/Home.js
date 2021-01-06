import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Infinite Observations Medium Scale Geospatial Visualizaion Environment.</h1>
            <small>Main Page.</small>
            <Link to={"/geospat"}>Enter Geospatial Environment</Link>
        </div>
    );
}

export default Home;