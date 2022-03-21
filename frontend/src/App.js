import React from "react";
import ToDoList from "./component/ToDoList";
import AddList from "./component/AddList";
import EditList from "./component/EditList";
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         {/* <ToDoList/> */}
//         <AddList/>
        
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <div>
        {/* <ToDoList/>
        <AddList/> */}
        <Switch>
          <Route exact path="/">
            <ToDoList/>
          </Route>
          <Route path="/add">
            <AddList/>
          </Route>
          <Route path="/edit/:id">
            <EditList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
