import { useEffect, useState } from "react";

type StepType = {
    name: string,
    durationMs: number
}

export const TaskFive = () => {
    const [stepIndex, setStepIndex] = useState(-1)
    // const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined)

    const steps: StepType[] = [
        {name: 'Разогрев', durationMs: 5000},
        {name: 'Приготовление', durationMs: 10000},
        {name: 'Подача', durationMs: 3000},
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setStepIndex(prev =>{
                if (prev === steps.length) {                    
                    return 2
                } else {
                    return prev + 1
                }
            })
        }, steps[stepIndex].durationMs)  
        
        return () => {
            clearTimeout(timeoutId)
        }           
    }, [stepIndex])

    return (
        <div>           
            <span>{steps[stepIndex].name}</span>
        </div>
    );
};

//? Задача 5: Таймер приготовления
//? Цель: Таймер для готовки с несколькими этапами.

//TODO: Этапы: "Разогрев" (5 сек), "Приготовление" (10 сек), "Подача" (3 сек)

//TODO: Автоматический переход между этапами

//TODO: Отображение текущего этапа и прогресс-бар

//* Особенности:

//* Как организовать цепочку таймеров?

//* Как сбрасывать всю последовательность?