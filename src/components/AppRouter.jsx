import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { useAuth } from '../hooks/useAuth';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <GuestRoute path="/">
                    <Landing />
                </GuestRoute>
            } />
            <Route path="/Login" element={
                <GuestRoute path="/login">
                    <Login />
                </GuestRoute>
            } />
            <Route path="/Register" element={
                <GuestRoute path="/register">
                    <Register />
                </GuestRoute>
            } />
            <Route path="/home" element={
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
            } />
        </Routes>
    );
}

const PrivateRoute = ({ children }) => {

    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}

const GuestRoute = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (auth.user) {
        return <Navigate to="/home" state={{ from: location }} />
    }

    return children
}

export default AppRouter;