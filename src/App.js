import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
