import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Porto from "./Navigation";
import TugasForm from "../../Form Regis & Valid/TugasForm";
import Hook from "../../Hooks/index";
import Lifecycle from "../../Lifecycle/Script";

const RoutingDone =() => {
    return (
    <div>

        <Router>
        {/* Navigation */}
            <Porto />
        
                <Switch>
                {/* <Route exact path="/" children={() => <Porto />} /> */}
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
