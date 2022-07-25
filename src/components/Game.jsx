import ApiClient from '../config/httpClient';
import { useState, useEffect } from 'react';

const Game = () => {

    const [loaded, setLoaded] = useState(false);
    const [questions, setQuestions] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [finished, setFinished] = useState(false);
    const [next, setNext] = useState(false);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [pointer, setPointer] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answerDisplay, setAnswerDisplay] = useState(null);
    const [scoreSubmitting, setScoreSubmitting] = useState(false);
    const [scoreOK, setScoreOK] = useState(false);
    const [scoreError, setScoreError] = useState({ is: false, message: '' });
    
    useEffect(() => {
        const fetchData = async () => {
            
            await ApiClient.get('api/game/questions').then(response => {
                setQuestions(response.data);
                setLoaded(true);
            }).catch(e => e);
        }
        if (questions == null) {
            fetchData();
        }
    })
    
    useEffect(() => {
        if (loaded) {
            startGame();
        }
    }, [loaded, pointer])

    useEffect(() => {
        if (finished && !scoreSubmitting && (!scoreOK || !scoreError.is)) {
            setScoreSubmitting(true);
            postScore().then(response => {
                setScoreSubmitting(false);
                setScoreOK(true);
            }).catch(e => {
                setScoreError({
                    is: true,
                    message: e
                });
            })
        }
    }, [finished]);

    const mapAnswers = (answers, event) => {
        return answers.map((answer, index) => {
            
            if (answer["is_correct"] == true && index == event.target.id) {
                setIsCorrect(true);
                setScore(score + 100);
                return <button key={index} id={index} className="bg-Correct w-full h-full p-7 text-xl rounded-2xl font-bold pointer">{answer.answer}</button>
            }

            if (answer["is_correct"] == true && index != event.target.id) {
                return <button key={index} id={index} className="bg-CorrectLight w-full h-full p-7 text-xl rounded-2xl pointer">{answer.answer}</button>
            }
            
            if(answer["is_correct"] == false && index == event.target.id) {
                return <button key={index} id={index} className="bg-Wrong w-full h-full p-7 text-xl font-bold rounded-2xl pointer">{answer.answer}</button>
            }
            if(answer["is_correct"] == false && index != event.target.id) {
                return <button key={index} id={index} className="bg-WrongLight w-full h-full p-7 text-xl rounded-2xl pointer">{answer.answer}</button>
            }
        })
    }
    
    const handleClickAnswer = (event) => {
        const question = questions[pointer];
        setAnswered(true);
        setCurrentQuestion(question);
        setIsCorrect(false);

        const answerList = mapAnswers(question.answers, event)
        
        setAnswerDisplay(answerList);

        setTimeout(() => {
            setNext(true);
        }, 3000)
        
    }
    const startGame = () => {
        if (pointer == questions.length -1) {
            setFinished(true);
        }
        const question = questions[pointer];
        setAnswered(false);
        setNext(false);
        setCurrentQuestion(question);

        const answersList = question.answers.map((answer, index) => <button key={index} id={index} onClick={(event) => handleClickAnswer(event)} className="bg-Secondary w-full h-full text-xl p-7 rounded-2xl font-bold pointer">{answer.answer}</button>)
        setAnswerDisplay(answersList);
        
    }
    const postScore = async () => {
        
        const info = {
            'score': score
        }
        await ApiClient.post('api/scores/store', info).then(response => console.log(response)).catch(e => console.error(e));
    }
    const nextQuestion = () => {
        setPointer(pointer + 1);
    }

    if (finished) {
        return (
            <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-10">
                <h1 className="text-white font-bold text-3xl">¡Muchas gracias por jugar a <span className="text-History">Quien quiere ser Solidario!</span></h1>
                <h3 className="text-white font-bold text-xl">Has sacado una puntuación de <span className="text-Geography">{score} puntos</span>.</h3>
                {!scoreOK && !scoreError.is && (
                    <div className="flex items-center justify-center text-white font-bold text-2xl gap-6">Loading
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {scoreOK && (
                    <div className="flex flex-col gap-7 items-center">
                        <p className="text-Correct font-bold text-lg">Su puntuación ha sido registrada correctamente</p>
                        <a href="/ranking" className="bg-Entertainment font-bold text-white rounded-lg p-4 w-1/3">Ver Rankings</a>
                        <a href="/play" className="bg-Primary font-bold text-white rounded-lg p-4 w-2/3">Jugar otra vez</a>
                        <a href="/" className="bg-Secondary font-bold text-white rounded-lg p-2 w-1/3">Volver al Inicio</a>
                    </div>
                )}
                {scoreError.is && (
                    <div className="flex flex-col gap-7 items-center">
                        <h4 className="text-Wrong font-bold text-xl">¡Lo sentimos!</h4>
                        <p className="text-Wrong font-bold text-lg">Ha habido un error publicando su puntuación. Inténtelo de nuevo más tarde.</p>
                        <a href="/rankings" className="bg-Entertainment font-bold text-white rounded-lg p-4 w-1/3">Ver Rankings</a>
                        <a href="/play" className="bg-Primary font-bold text-white rounded-lg p-4 w-2/3">Jugar otra vez</a>
                        <a href="/" className="bg-Secondary font-bold text-white rounded-lg p-2 w-1/3">Volver al Inicio</a>
                    </div>
                )}
            </div>
        )
    }
    
    if (answered && currentQuestion) {
        if (isCorrect) {
            return (
                <div className="w-screen h-screen bg-black flex flex-col justify-between">
                    <div>
                        <div className="w-full flex justify-end">
                            <p className="text-white text-xl font-bold p-6">Puntuación: {score}</p>
                        </div>
                        <div className="p-6">
                            {next ? <button onClick={nextQuestion} className="text-white bg-Secondary rounded-2xl p-3">Siguiente pregunta</button> : <p className="text-Correct text-2xl font-bold">¡Correcto! +100 puntos</p>}
                        </div>
                    </div>
                    <div className="w-full bg-Primary h-1/2 text-3xl text-white flex items-center justify-center text-white">
                        <h1>{currentQuestion.question}</h1>
                    </div>
                    <div className="bg-black w-full grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-4 px-4 py-3">
                        {answerDisplay}
                    </div>
                </div>
            )
        }
        return (
            <div className="w-screen h-screen bg-black flex flex-col justify-between">
                <div>
                    <div className="w-full flex justify-end">
                        <p className="text-white text-xl font-bold p-6">Puntuación: {score}</p>
                    </div>
                    <div className="p-6">
                        {next ? <button onClick={nextQuestion} className="text-white bg-Secondary rounded-2xl p-3">Siguiente pregunta</button> : <p className="text-Wrong text-2xl font-bold">¡Incorrecto! +0 puntos</p>}
                    </div>
                </div>
                <div className="w-full bg-Primary h-1/2 text-3xl text-white flex items-center justify-center text-white">
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className="w-full bg-black grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-4 px-4 py-3">
                    {answerDisplay}
                </div>
            </div>
        )
    }

    if (loaded && currentQuestion) {
        return (
            <div className="w-screen h-screen bg-black flex flex-col justify-between">
                <div className="w-full flex justify-end">
                    <p className="text-white text-xl font-bold p-6">Puntuación: {score}</p>
                </div>
                <div className="w-full bg-Primary h-1/2 text-3xl text-white flex items-center justify-center text-white">
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className="w-full grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-4 px-4 py-3">
                    {answerDisplay}
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
}

export default Game;