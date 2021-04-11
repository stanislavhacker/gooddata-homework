import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";

import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Dashboard from "./Dashboard";

import styles from "./AppRouter.module.scss";

import { useAuth } from "../contexts/Auth";
import { AuthStatus } from "../contexts/Auth/state";
const RedirectIfNotLoggedIn: React.FC = () => {
    const auth = useAuth();
    const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
    return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
};

const AppRouter: React.FC = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                <WorkspaceProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <RedirectIfNotLoggedIn />
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
