import React from "react";
import LoginPage from "../components/LoginPage";
import BlogDashbord from "../components/BlogDashboard";
import CreateBlog from "../components/CreateBlog";
import createHistory from 'history/createBrowserHistory';
import EditBlog from "../components/EditBlog";
import ReadBlog from "../components/ReadBlog";
import NotFoundPage from "../components/NotFoundPage";
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
          <div>
            <Switch>
              <PublicRoute path="/" component={LoginPage} exact={true} />
              <PrivateRoute path= "/dashboard" component={BlogDashbord} />
              <PrivateRoute path= "/create" component={CreateBlog} />
              <PrivateRoute path= "/edit/:id" component={EditBlog} />
              <PrivateRoute path= "/read/:id" component={ReadBlog} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          </Router>
      )

export default AppRouter