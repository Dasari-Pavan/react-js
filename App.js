import React from "react";
import ReactDOM from "react-dom/client";
import { jsxDEV } from "react/jsx-dev-runtime";



//Reactjs element creation 

const parent=React.createElement("h2",{id:"parent"},"Pavankumar")
             
//jsx (transpiled  before it reaches the js )--parcel by the help babel package 

//jsx => React.createElement => ReactElement-js object => HTMLelement(render)

const jsxheading=(<h1 id="parent">Namaste jsx Welcome me </h1>);

console.log(jsxheading);


//React Components
//Class Based Components -old


//Functional Components-new
// const HeadingComponent=()=>{
//     return <h1>Functional Component</h1>;
// };

// const Heading=()=>(
//     <h1 clas>Namaste React Functional Component</h1>
// )


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);





//React Element

const Relement=(
    
        <h1>
            Namaste React Element
        </h1>
    
)
//React Functional Element
const Heading=()=>(
    <h1 className="head" tabIndex="5">
        Namaste React using jsx
    </h1>
);

//React Functional Element

const HeadingComponent=()=>(
    <div id="container">
    {Relement}
    <Heading/>
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)

