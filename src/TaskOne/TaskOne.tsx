import { useState } from "react";

export const TaskOne = () => {
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined)
    const [time, setTime] = useState<number>(10)
    
    const resetInterval= () => {
        clearInterval(intervalId)
        setTime(10)
    }

    const startInterval = () => {
        const timerId = setInterval(() => {
            setTime(prev => prev - 1)            
        }, 100)

        setIntervalId(timerId)
    }
    
    return (
        <div>
            <div>{time}</div>
            <button onClick={startInterval} >Старт!</button>            
            <button onClick={resetInterval}>Сброс</button>            
        </div>
    );
};


// todo Задача 1: Таймер обратного отсчета
// todo Цель: Создай компонент таймера, который отсчитывает от 10 до 0 секунд.

// todo Кнопка "Старт" начинает отсчет

// todo Когда достигает 0, показывается сообщение "Время вышло!"

// todo Кнопка "Сброс" возвращает к 10 секундам

// todo Ключевые моменты для размышления:

// todo Какой таймер использовать - setTimeout или setInterval?

// todo Как предотвратить утечку памяти при размонтировании?

// todo Как обработать состояние, когда таймер завершился?