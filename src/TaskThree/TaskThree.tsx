import { ChangeEvent, useEffect, useState } from "react";

export const TaskThree = () => {
    const [text, setText] = useState<string | undefined>(undefined)
    const [timerId, setTimerId] = useState<number | undefined>(undefined)    

    const typeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (timerId) {
            clearTimeout(timerId)
        }  

        const currText = e.currentTarget.value   
        
        const id = setTimeout(() => {
            setText(currText) 
            setTimerId(undefined)                                  
        }, 1000)

        setTimerId(id)   
    }

    return (
        <div>
            <textarea onChange={typeText}>{text}</textarea> 
            {timerId && <span>Сохранение...</span>}
        </div>
    );
};
 
//? Задача 3: Таймер автосохранения
//? Цель: Имитация автосохранения в редакторе.

//* Поле textarea для ввода текста

//TODO: Сообщение "Сохранение..." появляется на 1 секунду при изменении текста

//TODO: Используй setTimeout с задержкой 1 секунду после последнего ввода

//* Что важно учесть:

//TODO: Как отменять предыдущий таймаут при новом вводе?

//TODO: Как избежать множественных сохранений?