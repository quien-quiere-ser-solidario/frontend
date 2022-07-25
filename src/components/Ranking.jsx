import { useEffect, useState } from "react";
import ApiClient from "../config/httpClient";

const Ranking = () => {
    const [scores, setScores] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({ is: false, message: ''})
    const [scoreDisplay, setScoreDisplay] = useState(null);

    useEffect(() => {
        if (!loaded && !errors.is) {
            getScores();
        }
        console.log(scores, errors);
    })
    useEffect(() => {
        if(scores !== null) {
            displayScores();
        }
    }, [scores])
    
    const getScores = async () => {
        await ApiClient.get('api/scores').then(response => {
            setScores(response.data);
            setLoaded(true);
        }).catch((error) => {
            setErrors({ is: true, message: error })
        })
    }
    const displayScores = () => {
        setScoreDisplay(scores.map((score, index) => (
            <tr key={score.id} id={score.id} className="text-white">
                <td className="p-3">
                    <h3 className="font-montserrat font-bold">{ index + 1 }</h3>
                </td>
                <td className="p-3">
                    <h3 className="font-montserrat font-bold">{ score.username }</h3>
                </td>
                <td className="p-3 font-bold">
                    <h3 className="font-montserrat font-bold">{ score.score }</h3>
                </td>
            </tr>)))
    }

    if (loaded && scoreDisplay) {
        return (
            <div className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1534620780923-1ce0db377c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')] bg-center bg-no-repeat bg-cover flex flex-col justify-center gap-24 items-center">
                <table className="w-3/4 lg:w-2/3 table text-white border-separate space-y-6 text-md">
                    <thead className="bg-Primary text-white sticky top-0">
                        <tr className="font-k2d font-black">
                            <th className="px-5 py-4 lg:p-3">Clasificación</th>
                            <th className="px-5 py-4 lg:p-3">Usuario</th>
                            <th className="px-5 py-4 lg:p-3">Puntuación</th>
                        </tr>
                    </thead>
                    <tbody className="bg-black">
                        {scoreDisplay}
                    </tbody>
                </table>
                <div className="w-1/2 flex items-center justify-center">
                    <a href="/" className="bg-Secondary text-white py-4 px-10 font-bold rounded-xl">Volver al Inicio</a>
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen bg-Dark flex items-center justify-center text-white font-bold text-2xl gap-6">Loading
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
        </div>
    )
};

export default Ranking;