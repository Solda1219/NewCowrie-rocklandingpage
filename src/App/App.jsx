import React from "react";
import Demo from '../containers/templateConfig/mainLayout';
import { library } from "@fortawesome/fontawesome-svg-core";
import useEagerConnect from "hooks/useEagerConnect";
import fontAwesomeIcon from "../utility/icons/fontawesome";
library.add(fontAwesomeIcon);

window.$ = window.jQuery = require('jquery')

const App = () =>{
    useEagerConnect();
    return (
        <Demo />
    );
}

export default App;
