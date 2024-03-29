import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const auth = useAuth();

    const signIn = async (event) => {
        event.preventDefault();
        const formData = {
            email: email,
            password: password
        }
        auth.login(formData).catch(e => {
            const errorsObject = e.response.data.errors;

            setErrors(errorsObject);
        });
    }


    return (
        <div className="flex bg-[url('http://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=1171')] bg-center bg-no-repeat bg-cover h-screen w-full justify-center items-center">
            <form className="flex flex-col bg-Dark max-h-full w-4/5 md:w-2/4 lg:w-2/6 rounded-3xl justify-evenly py-6 gap-10 items-center">
                <p className="text-white font-bold text-3xl">Login <span className="text-History">Solidario</span></p>
                <div className="flex flex-col gap-4 w-full h-full px-6 items-center">
                    <input required className="rounded-full py-3 px-6 lg:w-2/3" id="email" name="email" type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Email..." />
                    {errors.email && (
                        <>
                            {errors.email.map(error => <p className="text-white py-2 font-bold">{error}</p>)}
                        </>
                    )}
                    <input required className="rounded-full py-3 px-6 lg:w-2/3" id="password" type="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password}  placeholder="Contraseña.."/>
                    {errors.password && (
                        <>
                            {errors.password.map(error => <p className="text-white py-2 font-bold">{error}</p>)}
                        </>
                    )}
                </div>
                <button type="submit" onClick={(e) => signIn(e)} className="text-white font-bold text-2xl w-fit px-10 h-12 rounded-full bg-Entertainment">Login</button>
                <div>
                    <p className=" text-white font-bold text-lg">Si no tienes cuenta...</p>
                    <p><a href="/register"><span className="font-bold text-xl text-Entertainment">Regístrate ya!</span></a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;