



const Register = () => {
    return (
        <div className="flex bg-[url('https://images.unsplash.com/photo-1600921413222-7d4324c17035?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80&w=1171')]   bg-no-repeat bg-cover h-screen w-full justify-center items-center">
            <div className="flex flex-col bg-Dark h-4/6  w-72 rounded-3xl justify-evenly px-8 items-center">
                <p className="text-white font-bold text-2xl">Register <span className="text-Entertainment">Solidario</span></p>
                <div className="flex flex-col gap-6 ">
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Usuario.."/>
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Email..."/>
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Contraseña.."/>
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Repetir contraseña..."/>
                </div>
                <button className="text-white font-bold text-2xl w-fit px-10 h-12 rounded-full bg-Entertainment">Registrarse</button>
                <p className=" text-white font-bold text-xl">¿Ya tienes cuenta?<a href="/Login"><span className="text-History">Login</span></a></p>
            </div>
        </div>
    );
}

export default Register;