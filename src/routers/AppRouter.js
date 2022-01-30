import React from "react";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import BlogDashbord from "../components/BlogDashboard";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import ReadBlog from "../components/ReadBlog"
import NotFoundPage from "../components/NotFoundPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRouter = () => (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path="/" component={LoginPage} exact={true} />
              <Route path= "/dashboard" component={BlogDashbord} />
              <Route path= "/create" component={CreateBlog} />
              <Route path= "/edit/:id" component={EditBlog} />
              <Route path= "/read/:id" component={ReadBlog} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      )

export default AppRouter