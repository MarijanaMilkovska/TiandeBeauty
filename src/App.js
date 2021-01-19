import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from './components/AboutUs';
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import Privacy from "./components/Privacy";
import Shipping from "./components/Shipping";
import Terms from "./components/Terms";
import ControlledCarousel from "./components/Carousel1";
import Catalog from "./components/Catalog";
import Nav from "./components/Nav";
import Action from "./components/Action";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar/>
                  <Switch>
            <Route exact path="/" component={ControlledCarousel} />
            <Route exact path="/naracaj" component={Catalog}/>
            <Route path="/Details/:id" component={CardDetail} />
            <Route path="/akcija" component={Action}/>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact}/>
            <Route path="/Payment" component={Payment} />
            <Route path="/Privacy" component={Privacy} />
            <Route path="/Shipping" component={Shipping}/>
            <Route path="/Terms" component={Terms} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
