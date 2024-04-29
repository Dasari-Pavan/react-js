import React from "react";
import ReactDOM from "react-dom/client";


const parent=React.createElement("div",{id:"parent"},[
             React.createElement("div",{id:"child"},
             [React.createElement("h1",{},"Pavankumar"),
             React.createElement("h2",{},"Dasari "),
            ]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Pavankumar"),
            React.createElement("h2",{},"Dasari Pavankumar"),
           ]),
    ]);
             
             
             

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



