import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState(''); 
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const auth = useAuth();

    const signUp = async (event) => {
        event.preventDefault();
        const formData = {
            'username': username,
            'email': email,
            'password': password,
            'repeat-password': repeatPassword,
        }

        auth.register(formData).then(() => setSubmitted(true)).catch(error => {
            const errorsObject = error.response.data.errors;

            setErrors(errorsObject);
        });

    }

    return (
        <>
            {submitted ? 
                (<Navigate to="/login" />) : 
                (
                    <div className="flex bg-[url('https://images.unsplash.com/photo-1600921413222-7d4324c17035?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80&w=1171')] bg-no-repeat bg-cover bg-center h-screen w-full justify-center items-center">
                        <form className="flex flex-col bg-Dark h-4/6  w-72 rounded-3xl justify-evenly px-8 items-center">
                            <p className="text-white font-bold text-2xl">Register <span className="text-Entertainment">Solidario</span></p>
                            <div className="flex flex-col gap-6 ">
                                {errors.username && (
                                    <div className="bg-white">
                                        <p>Hay errores con el usuario:</p>
                                        <ul>
                                            {errors.username.map(error => <li>{error}</li>)}
                                        </ul>
                                    </div>
                                )}
                                <input required className="h-12 w-48 rounded-full px-6" id="username" name="username" type="text" onChange={(event) => setUsername(event.target.value)} value={username} placeholder="Usuario.."/>
                                {errors.email && (
                                    <div className="bg-white">
                                        <p>Hay errores con el correo:</p>
                                        <ul>
                                            {errors.email.map(error => <li>{error}</li>)}
                                        </ul>
                                    </div>
                                )}
                                <input required className="h-12 w-48 rounded-full px-6" id="email" name="email" type="email" onChange={(event) => setEmail(event.target.value)} value={email}  placeholder="Email..."/>
                                {errors.password && (
                                    <div className="bg-white">
                                        <p>Hay errores con la contraseña:</p>
                                        <ul>
                                            {errors.password.map(error => <li>{error}</li>)}
                                        </ul>
                                    </div>
                                )}
                                <input required className="h-12 w-48 rounded-full px-6" id="password" type="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password}  placeholder="Contraseña.."/>
                                {errors["repeat-password"] && (
                                    <div className="bg-white">
                                        <p>Hay errores con la contraseña repetida:</p>
                                        <ul>
                                            {errors["repeat-password"].map(error => <li>{error}</li>)}
                                        </ul>
                                    </div>
                                )}
                                <input required className="h-12 w-48 rounded-full px-6" id="repeat-password" name="repeat-pasword" type="password" onChange={(event) => setRepeatPassword(event.target.value)} value={repeatPassword} placeholder="Repetir contraseña..."/>
                            </div>
                            <button type="submit" onClick={(event) => signUp(event)} className="text-white font-bold text-2xl w-fit px-10 h-12 rounded-full bg-Entertainment">Registrarse</button>
                            <div>
                                <p className=" text-white font-bold text-lg">¿Ya tienes cuenta?</p>
                                <p><a href="/Login"><span className="font-bold text-xl text-History">Login</span></a></p>
                            </div>
                        </form>
                    </div>
                )}
        </>
    );
}

export default Register;