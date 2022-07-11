import { Routes, Route, } from "react-router-dom";
import Landing from "./Landing";
/*import Home from "./Home";*/
import Login from "./Login";
import Register from "./Register";

const AppRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Landing />} />
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    </Routes>
    );
}

export default AppRouter;