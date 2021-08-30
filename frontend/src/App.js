import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, ProductScreen, CartScreen } from "./pages/index";
import { Backdrop, Navbar, SideDrawer } from "./components/partials";
import { useState } from "react";

require("dotenv").config();

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar menuClickHandler={() => setSideToggle(true)} />
      <SideDrawer
        show={sideToggle}
        listOnClickHanlder={() => setSideToggle(false)}
      />
      <Backdrop
        show={sideToggle}
        backdropClickHandler={() => setSideToggle(false)}
      />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
