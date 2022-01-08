import { Route, Switch, Redirect } from "react-router-dom";
import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import UserDetail from "./pages/UserDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import UserProvider from "./userStorage/UserHandler";

function App() {
  return (
    <UserProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/users" />
          </Route>
          <Route path="/users" exact>
            <AllUsers />
          </Route>
          <Route path="/users/:userId">
            <UserDetail />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/usersWebApp" exact>
            <Redirect to="/users" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </UserProvider>
  );
}

export default App;
