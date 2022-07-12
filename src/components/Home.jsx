import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();

        auth.logout().then(() => <Navigate to="/" />).catch(error => console.log(error));
    }

    return (
        <div>
            You're logged in!
            <button onClick={(e) => logout(e)}>Log Out!</button>
        </div>
    )
}

export default Home;