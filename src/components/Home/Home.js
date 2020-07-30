import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Wrapper";

const Home = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </div>
  );
};

export default Home;
