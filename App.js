// const heading=React.createElement("h1",{ id:"main"},"Dasari Pavan kumar");
// console.log(heading)
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/**
 * 
 * <div>
 *       <div id="parent">
 *       <div id="child">
 *       <h1>hii hello</h1>
 *       </div>
 *       </div> 
 * </div>
 * 
 * 
 */


const parent=React.createElement("div",{id:"parent"},[
             React.createElement("div",{id:"child"},
             [React.createElement("h1",{},"Pavankumar"),
             React.createElement("h2",{},"Dasari Pavankumar"),
            ]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Pavankumar"),
            React.createElement("h2",{},"Dasari Pavankumar"),
           ]),
    ]);
             
             
             

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



