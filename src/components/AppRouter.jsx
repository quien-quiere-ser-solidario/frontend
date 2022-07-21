import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Game from "./Game";
import Ranking from './Ranking';
import { useAuth } from '../hooks/useAuth';

const RestrictedRoute = ({ children }) => {

    const auth = useAuth();
    const location = useLocation();
    
    if (auth.user === false) {
        return <Navigate to="/" state={{ from: location }} />
    }

    return children
}

const AnonymousRoute = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (auth.user) {
        return <Navigate to="/home" state={{ from: location }} />
    }

    return children
}
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <AnonymousRoute>
                    <Landing />
                </AnonymousRoute>
            } />
            <Route path="/login" element={
                <AnonymousRoute>
                    <Login />
                </AnonymousRoute>
            } />
            <Route path="/register" element={
                <AnonymousRoute>
                    <Register />
                </AnonymousRoute>
            } />
            <Route path="/play" element={ 
                <RestrictedRoute>
                    <Game />
                </RestrictedRoute>
            } />
            <Route path="/ranking" element={
                <RestrictedRoute>
                    <Ranking />
                </RestrictedRoute>
            } />
            <Route path="/home" element={
                <RestrictedRoute>
                    <Home />
                </RestrictedRoute>
            } />
        </Routes>
    );
}


export default AppRouter;