import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TugasForm from "../../Form Regis & Valid/TugasForm";
import Hook from "../../Hooks/index";
import Lifecycle from "../../Lifecycle/Script";
import Nav from "./Navigation";
import Portofolio from "../../Portofolio React";
// import Routing from "..";
const RoutingDone =() => {
    return (
    <div>

        <Router>
        {/* Navigation */}
            <Nav />
        
                <Switch>
                <Route exact path="/" children={() => <Portofolio />} />
                <Route path="/Form" children={() => <TugasForm />} />
                <Route path="/Hooks" children={() => <Hook />} />
                <Route path="/Lifecycle" children={() => <Lifecycle />} />
                {/* <Route path="/post/:id" children={() => <Post />} /> */}
                </Switch>
        </Router>
    </div>
    )
}

export default RoutingDone;

