import { useState } from "react";

type StopwatchType = {
    min: string
    sec: string
    ms: string
    status: 'running' | 'pause' | 'idle'
    id: number | undefined
}

export const TaskTwo = () => {
    const [stopwatch, setStopwatch] = useState<StopwatchType>({min: '00', sec: '00', ms: '0000', status: 'idle', id: undefined})
    
    const startStopwatch = () => {
        if (stopwatch.id) {
            clearInterval(stopwatch.id)
            setStopwatch({...stopwatch, id: undefined})
        }

        const stopwatchId = setInterval(() => {            
            setStopwatch(prev => {
                let currMs = +prev.ms + 10
                let currSec = +prev.sec

                console.log(stopwatchId, currSec, currMs);    

                if (currMs >= 1000) {
                    currSec += 1
                    currMs -= 1000
                }

                let currMin = +prev.min

                if (currSec >= 60) {
                    currMin += 1
                    currSec -= 60
                }

                return {
                    id: stopwatchId,
                    status: 'running',
                    min: currMin.toString(),
                    sec: currSec.toString(),
                    ms: currMs.toString()
                }
            })                    
        }, 10)  
    }

    const pauseStopwatch = () => {
        clearInterval(stopwatch.id)
        setStopwatch({...stopwatch, status: 'pause'})
    }

    const resetStopwatch = () => {
        clearInterval(stopwatch.id)
        setStopwatch({min: '00', sec: '00', ms: '0000', status: 'idle', id: undefined})
    }

    return (
        <div>
            <div>
                <span>{`${stopwatch.min}:`}</span>
                <span>{`${stopwatch.sec}:`}</span>
                <span>{`${stopwatch.ms}`}</span>
            </div>            
            <button onClick={startStopwatch} disabled={stopwatch.status === 'running'}>Старт</button>
            <button onClick={pauseStopwatch} disabled={stopwatch.status === 'pause'}>Пауза</button>
            <button onClick={resetStopwatch} disabled={stopwatch.status === 'running'}>Сброс</button>            
        </div>
    );
};

//? Задача 2: Секундомер
//? Цель: Создай секундомер с миллисекундами.

//todo Кнопки: "Старт", "Пауза", "Сброс"

//todo Отображение в формате: мм:сс:мс

//todo Точное обновление каждые 10 мс

//* Вопросы для самопроверки:

//todo Почему setInterval может дрейфовать?

//todo Как хранить время начала для точного расчета?

//todo Нужен ли useRef для хранения интервала?