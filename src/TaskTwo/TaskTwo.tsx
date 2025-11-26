import { useState } from "react";
import styles from './TaskTwo.module.css'

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

                const correctMin = convertTime(currMin.toString())
                const correctSec = convertTime(currSec.toString())
                const correctMs = convertTime(currMs.toString(), 'ms')

                return {
                    id: stopwatchId,
                    status: 'running',
                    min:correctMin,
                    sec: correctSec,
                    ms: correctMs
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

    const convertTime = (value: string, type?: string) => {
        if (type === 'ms') {
            return '0'.repeat(4 - value.length) + value
        } else {
            return '0'.repeat(2 - value.length) + value
        }
    }

    return (
        <div className={styles.container}>
            <h2>Секундомер</h2>
            <div className={styles.stopwatch}>                
                <span>{`${stopwatch.min}`}</span>:
                <span>{`${stopwatch.sec}`}</span>:
                <span>{`${stopwatch.ms}`}</span>
            </div> 
            <div className={styles.buttonsGroup}>
                <button onClick={startStopwatch} disabled={stopwatch.status === 'running'}>Старт</button>
                <button onClick={pauseStopwatch} disabled={stopwatch.status === 'pause'}>Пауза</button>
                <button onClick={resetStopwatch} disabled={stopwatch.status === 'running'}>Сброс</button>      
            </div> 
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