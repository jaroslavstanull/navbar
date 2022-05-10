import React from "react";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./Components/Todo";

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Shop" component={Shop} />
          <Route path="/About" component={About} />
          <Route path="/Todo" component={Todo} />
        </Switch>
      </div>
    </Router>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla molestiae laudantium, dolor saepe beatae, recusandae officia fuga temporibus repudiandae aliquid distinctio fugiat eaque, consequatur ut corporis dolores in ducimus.</div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla molestiae laudantium, dolor saepe beatae, recusandae officia fuga temporibus repudiandae aliquid distinctio fugiat eaque, consequatur ut corporis dolores in ducimus.</div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla molestiae laudantium, dolor saepe beatae, recusandae officia fuga temporibus repudiandae aliquid distinctio fugiat eaque, consequatur ut corporis dolores in ducimus.</div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla molestiae laudantium, dolor saepe beatae, recusandae officia fuga temporibus repudiandae aliquid distinctio fugiat eaque, consequatur ut corporis dolores in ducimus.</div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla molestiae laudantium, dolor saepe beatae, recusandae officia fuga temporibus repudiandae aliquid distinctio fugiat eaque, consequatur ut corporis dolores in ducimus.</div>

    
    </div>


  );
}

export default App;
