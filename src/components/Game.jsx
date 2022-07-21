import useAuth from '../hooks/useAuth';
import ApiClient from '../config/httpClient';
import { useState, useEffect } from 'react';

const Game = () => {

    const [loaded, setLoaded] = useState(false);
    const [questions, setQuestions] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [pointer, setPointer] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answerDisplay, setAnswerDisplay] = useState(null);

    
    const handleClickAnswer = (event) => {
        const question = questions[pointer];
        setAnswered(true);
        setCurrentQuestion(question);
        
        if (pointer == questions.length -1) {
            setFinished(true);
        }
        
        setIsCorrect(false);

        const answerList = question.answers.map((answer, index) => {
            
            if (answer["is_correct"] == true && index == event.target.id) {
                console.log('correct clicked');
                setIsCorrect(true);
                setScore(score + 100);
                return <button key={index} id={index} className="bg-Correct w-full h-full p-7 text-xl rounded-2xl font-bold pointer">{answer.answer}</button>
            }

            if (answer["is_correct"] == true && index != event.target.id) {
                console.log('correct not clicked');
                return <button key={index} id={index} className="bg-CorrectLight w-full h-full p-7 text-xl rounded-2xl pointer">{answer.answer}</button>
            }
            
            if(answer["is_correct"] == false && index == event.target.id) {
                console.log('incorrect clicked');
                return <button key={index} id={index} className="bg-Wrong w-full h-full p-7 text-xl font-bold rounded-2xl pointer">{answer.answer}</button>
            }
            if (answer["is_correct"] == false && index != event.target.id) {
                console.log('incorrect not clicked');
                return <button key={index} id={index} className="bg-WrongLight w-full h-full p-7 text-xl rounded-2xl pointer">{answer.answer}</button>
            }
        })
        
        setAnswerDisplay(answerList);  
        
    }
    const startGame = () => {
        const question = questions[pointer];
        setAnswered(false);
        setCurrentQuestion(question);

        const answersList = question.answers.map((answer, index) => <button key={index} id={index} onClick={(event) => handleClickAnswer(event)} className="bg-Secondary w-full h-full text-xl p-7 rounded-2xl font-bold pointer">{answer.answer}</button>)
        setAnswerDisplay(answersList);
        
    }

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

    
    if (answered && currentQuestion) {
        if (isCorrect) {
            return (
                <div className="w-screen h-screen bg-black flex flex-col justify-between">
                    <div>
                        <div className="w-full flex justify-end">
                            <p className="text-white text-xl font-bold p-6">Puntuación: {score}</p>
                        </div>
                        <div>
                            <p className="text-Correct text-2xl font-bold">¡Correcto! +100 puntos</p>
                        </div>
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
            <div className="w-screen h-screen bg-black flex flex-col justify-between">
                <div>
                    <div className="w-full flex justify-end">
                        <p className="text-white text-xl font-bold p-6">Puntuación: {score}</p>
                    </div>
                    <div>
                        <p className="text-Wrong text-2xl font-bold">¡Incorrecto! +0 puntos</p>
                    </div>
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
        <div className="w-screen h-screen bg-Dark flex items-center justify-center text-white font-bold text-2xl">Loading</div>
    )
}

export default Game;