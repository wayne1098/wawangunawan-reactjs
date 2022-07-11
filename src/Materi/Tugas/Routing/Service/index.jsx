import { Switch, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
const Service =() => {
    const match = useRouteMatch();
    return(
        <div className="main">
            <h1>Service</h1>
        <ul>
            <li><Link to={`${match.url}/Computer`}>Computer</Link></li>
            <li><Link to={`${match.url}/Output`}>Output</Link></li>
            <li><Link to={`${match.url}/Monitor`}>Monitor</Link></li>
        </ul>       
         <hr />
         <Switch>
            <Route path={`${match.url}/Computer`}>
                jkrytkffffffffffffffffffffffgntfyj
            </Route>
            <Route path={`${match.url}/Output`}>
                ccccccccccccccccccccc
            </Route>
            <Route path={`${match.url}/Monitor`}>
                aaaaaaaaaaaaaaaaaaaaaaaaaa
            </Route>
          </Switch>   
        </div>

    )
}

export default Service;
    