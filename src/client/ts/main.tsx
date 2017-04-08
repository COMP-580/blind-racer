/**
 * Main entry point for bootstrapping
 */

/**
 * Load libraries
 */

let $ = require("../libraries/jquery/dist/jquery");
(global as any).jQuery = $;
require("../libraries/bootstrap-sass/assets/javascripts/bootstrap");

/**
 * Bootstrap files
 */
import "./actions/SampleActions";
import "./stores/SampleStore";

/**
 * Load the main react component
 */
import Main from "./components/Main";
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <Main />,
    document.getElementById("main-frame")
);
