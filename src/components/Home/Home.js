import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Wrapper";
import Layout from "../../container/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </Layout>
  );
};

export default Home;
