import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Home = () => {

const auth = useAuth();

const logout = () => { 

    return auth.logout().then(() => <Navigate to="/" />).catch(error => console.log(error));

}


    return (
        <div className="w-screen h-screen bg-Dark flex flex-col items-center justify-evenly">
            <div className="flex flex-col items-center">
                <img className="w-1/3 lg:w-1/6" src="https://i.ibb.co/xg6VZY0/Logo.png" alt="Logo" />
                <h1 className="text-History font-bold text-2xl">¿Quien quiere ser solidario?</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <a href='/play' className="flex items-center justify-center text-white font-bold text-2xl w-fit px-10 py-8 rounded-3xl bg-Primary mb-2 ">¡JUGAR!</a>
                <a href='/ranking' className="flex items-center justify-center font-bold text-2xl w-fit px-10 py-4 rounded-full bg-Entertainment mb-2">Ver Rankings</a>
                <button className="text-white font-bold text-2xl w-fit px-8 py-3 rounded-full bg-Wrong mb-2" onClick={logout}>Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Home;