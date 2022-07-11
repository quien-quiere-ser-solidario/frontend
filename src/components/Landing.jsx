



const Landing = () => {
    return (
        <div className=" bg-Dark h-screen flex flex-col justify-evenly">
            <div className="flex flex-col items-center -mt-10">
                <img className="w-24" src="https://i.ibb.co/xg6VZY0/Logo.png" alt="Logo"/>
                <p className="text-white font-bold text-3xl px-6">¿Te gusta <span className="uppercase text-Entertainment">jugar</span> y <span className=" uppercase text-Entertainment">ayudar</span>?</p>
                </div>
            <p className="text-white font-bold px-10 text-xl">¡En <span className="text-History">Quien quiere ser solidario?</span> podrás <span className="text-Entertainment">jugar</span>  partidas de Trivia y <span className="text-Entertainment">competir</span> con las demás personas por un ranking mensual!</p>
            <div className="flex flex-col items-center">
                <p className="text-white font-bold px-6 text-2xl">¿Y aún no tienes cuenta en <span className="text-History">Quien quiere ser solidario?</span></p>
                <a href="/Register" className="flex flex-col bg-Secondary h-20 w-fit text-white rounded-3xl py-3 px-2 text-2xl font-bold my-4 justify-center">¡Registrate ya para jugar!</a>
                <p className=" text-white font-bold text-xl">Si ya tiene cuenta, <a href="/Login"><span className=" text-History">inicia sesión</span></a>.</p>
            </div>
        </div>
    );
}

export default Landing;