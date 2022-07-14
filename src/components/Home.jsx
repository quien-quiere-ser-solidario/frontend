import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();

        auth.logout().then(() => <Navigate to="/" />).catch(error => console.log(error));
    }

    return (
        <div class="w-screen h-screen bg-black">
            <div class="flex flex-col items-center">
                <img className="w-24" src="https://i.ibb.co/xg6VZY0/Logo.png" alt="Logo"/>

            </div>
            You're logged in!
            <button onClick={(e) => logout(e)}>Log Out!</button>
        </div>
    )
}

export default Home;