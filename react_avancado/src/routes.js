import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Product from "./pages/Product";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route  path="/product/:id" component={Product} />
        <Route  path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
