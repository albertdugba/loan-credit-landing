import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Wrapper";
import Layout from "../../../container/Layout/Layout";
import Faqs from "../../pages/Faqs/Faqs";
import Services from "../../pages/ServicesPage/Services";
import Products from "../../pages/Products/Products";
import Apply from "../../pages/Apply/Apply";

const Home = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </Layout>
  );
};

export default Home;
