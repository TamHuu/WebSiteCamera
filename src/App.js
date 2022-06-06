import "./App.css";
import React from "react";
import ClippedDrawer from "./Drawer/ClippedDrawer";
import Battery from "./Page/Battery";
import Camera from "./Page/Camera";
import Scanner from "./Page/Scanner";
import Telecom from "./Page/Telecommunications ";
import Ups from "./Page/Ups";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div>
        <ClippedDrawer
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
        />
        <main>
          <Switch>
            <Route path="/Telecom" component={Telecom} />
            <Route path="/Battery" component={Battery} />
            <Route path="/Ups" component={Ups} />
            <Route path="/Scanner" component={Scanner} />
            <Route path="/" component={Camera} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
