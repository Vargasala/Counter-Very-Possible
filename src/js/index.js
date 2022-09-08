//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let segundosUnidad = 0;

let segundosDecena = 0;

let minutosUnidad = 0;

let minutosDecena = 0;

let horasUnidad = 0;

let horasDecena = 0;

setInterval(function () {
     
    segundosUnidad ++;

    if (segundosUnidad > 1) {
        segundosUnidad = 0;
        segundosDecena++;
    

             if (segundosDecena > 5) {
             segundosDecena = 0;
             minutosUnidad ++;
    

                if (minutosUnidad > 9) {
                    minutosUnidad = 0;
                    minutosDecena ++;
    

                    if (minutosDecena > 5) {
                        minutosDecena = 0;
                        horasUnidad ++;
    

                        if (horasUnidad > 9) {
                            horasUnidad = 0;
                            horasDecena ++;
                        
                        }}}}};

    ReactDOM.render(<Home segundosUnidad = {
        segundosUnidad
    }
    segundosDecena = {
        segundosDecena
    }
    minutosUnidad = {
        minutosUnidad
    }
    minutosDecena = {
        minutosDecena
    }
    horasUnidad = {
        horasUnidad
    }
    horasDecena = {
        horasDecena
    }
    
    
    />, document.querySelector("#app"));


    
    }, 1000);


//render your react application

