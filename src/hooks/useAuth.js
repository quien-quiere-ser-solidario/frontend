import { useState, useEffect, useContext, createContext } from "react";
import ApiClient from '../config/httpClient';

/**
 * useAuth();
 * To see more info about this hook: https://usehooks.com/useAuth/
 */

// Inicializamos un contexto que conoce React en una variable para nuestro proveedor.

const authContext = createContext();

/**
 * ProvideAuth es la función que hará que nuestra aplicación de React conozca nuestro hook y todos sus datos en todos sus componentes, como un servicio.
 */

export const ProvideAuth = ({ children }) => {

    const auth = useProvideAuth();
    
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Inicializamos la variable de nuestro Hook que importaremos en los componentes para usar la lógica. Este llamará a todo el contexto de auth y devolverá el user y todos los métodos.

export const useAuth = () => {
    return useContext(authContext);
}

const useProvideAuth = () => {
    
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    const register = async (formData) => {
        return await ApiClient.get('/sanctum/csrf-cookie').then(async response => {
            await ApiClient.post('/api/auth/register', formData).catch(error => console.log(error));
        }).catch(error => console.log(error));
    }

    const login = async (formData) => {

        return await ApiClient.get('/sanctum/csrf-cookie').then(async response => {

            await ApiClient.post('/api/auth/login', formData).then(response => {

                setUser(response.data);
                window.localStorage.setItem('user', response.data);

                return response.data

            }).catch(error => {

                console.log(error.message);

                return error.message;

            }); 

        }).catch(error => {
            console.log(error.message);
        });
    }

    const logout = async () => {
        return await ApiClient.post('/api/auth/logout').then(response => {
            setUser(false);
            window.localStorage.removeItem('user');
        }).catch(error => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        const user = window.localStorage.getItem('user');
        if (user) {
            setUser(user);
        } else {
            setUser(false);
        }

    }, [])


    return {
        user,
        login,
        logout,
        register
    }
}