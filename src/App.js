import React from "react";
import NewBook from "./component/pages/NewBook";
import MainNavigation from "./component/Header/MainNavigation";
import Footer from "./component/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import AllBooks from "./component/pages/AllBooks";
import EditBook from "./component/pages/EditBook"

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllBooks />
        </Route>
        <Route path="/newbook" exact>
          <NewBook />
        </Route>
        <Route path="/newbook/edit/:id" exact>
          <EditBook />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
