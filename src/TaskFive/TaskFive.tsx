import { useEffect, useState } from "react";

type StepType = {
    name: string,
    durationMs: number
}

export const TaskFive = () => {
    const [stepIndex, setStepIndex] = useState(0)
    const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined)

    const steps: StepType[] = [
        {name: 'Разогрев', durationMs: 1000},
        {name: 'Приготовление', durationMs: 1000},
        {name: 'Подача', durationMs: 1000},
    ]

    const resetTimeout = () => {
        if (timeoutId) {
            clearInterval(timeoutId)
            setTimeoutId(undefined)
        }
    }

    const startStep = (stepData: StepType) => {
        const {name, durationMs} = stepData

        console.log(name);  
        
        resetTimeout()

        const timeoutId = setTimeout(() => {            
            setStepIndex(prev => prev + 1)            
        }, durationMs)

        setTimeoutId(timeoutId)       
    }

    const showStep = () => {
        return <div>
            {steps[stepIndex].name}
        </div>
    }

    console.log(timeoutId, stepIndex);
    

    return (
        <div>                     
            <button onClick={() => {startStep(steps[stepIndex])}}>НАЧАЛИ</button>
            <div>
                {showStep()}
            </div>
            

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