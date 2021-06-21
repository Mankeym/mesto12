import React from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, loggedIn }) => {
    return (
        <Route>
            {() =>
                loggedIn ? <Component /> : <Redirect to="/sign-in" />
            }
        </Route>
    );
};

export default ProtectedRoute;