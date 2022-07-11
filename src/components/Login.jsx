



const Login = () => {
    return (
        <div className="flex bg-[url('http://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=1171')]   bg-no-repeat bg-cover h-screen w-full justify-center items-center">
            <div className="flex flex-col bg-Dark h-3/6  w-72 rounded-3xl justify-evenly px-8 items-center">
                <p className="text-white font-bold text-3xl">Login <span className="text-History">Solidario</span></p>
                <div className="flex flex-col gap-6 ">
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Email..."/>
                    <input className="h-12 w-48 rounded-full px-6" type="text" placeholder="Password..."/>
                </div>
                <button className="text-white font-bold text-2xl w-fit px-10 h-12 rounded-full bg-Entertainment">Login</button>
                <p className=" text-white font-bold text-xl">Si no tienes cuenta...<a href="/Register"><span className=" text-Entertainment">Regístrate ya!</span></a></p>
            </div>
        </div>
    );
}

export default Login;