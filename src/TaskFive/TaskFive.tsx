import { useEffect, useState } from "react";

type StepType = {
    name: string,
    durationMs: number
}

const steps: StepType[] = [
    {name: 'Разогрев', durationMs: 1000},
    {name: 'Приготовление', durationMs: 1000},
    {name: 'Подача', durationMs: 1000},
]

export const TaskFive = () => {
    const [stepIndex, setStepIndex] = useState(0)
    
    useEffect(() => {  
        if (stepIndex === steps.length) {
            return
        }
            
        const timeoutId = setTimeout(() => {
            setStepIndex(prev => prev + 1)
        }, steps[stepIndex].durationMs)          

        return () => {
            clearTimeout(timeoutId)
        }           
    }, [stepIndex])

    return (
        <div>
            { stepIndex === steps.length ? <span>ФИНИШЬ!</span> : <span>{steps[stepIndex].name}</span>} 
        </div>
    );
};


//? Задача 5: Таймер приготовления
//? Цель: Таймер для готовки с несколькими этапами.

//TODO: Этапы: "Разогрев" (5 сек), "Приготовление" (10 сек), "Подача" (3 сек)

//TODO: Автоматический переход между этапами

//* Особенности:

//* Как организовать цепочку таймеров?

//* Как сбрасывать всю последовательность?

//TODO: Отображение текущего этапа и прогресс-бар
