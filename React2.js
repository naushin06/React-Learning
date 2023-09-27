// const heading = React.createElement("h1",{},"eathh")
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)


//div
//div 
//h1
///div
//div

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"h1"},"heading1"),React.createElement("h1",{id:"h2"},"heading2")])))
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)