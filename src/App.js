import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {
return (
	<Router>
		<Switch>
		<Route exact path="/login" component={Login} />
		<Route exact path="/search" component={Search} />
		<Route path="/" component={Home} />
			
		<Redirect to="/" />
		</Switch>
	</Router>
);
}

export default App;
