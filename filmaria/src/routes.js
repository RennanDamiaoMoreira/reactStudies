import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Home from './pages/Home';
import Header from './components/Header';
import NotFound from "./pages/NotFound";
import Film from "./pages/Film";

const Routes = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/film/:id" component={Film} />
                <Route path="*" component={NotFound} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;