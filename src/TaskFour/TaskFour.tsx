import { useEffect, useState } from 'react';
import img_one from './assets/2b37056c5ff75bffe7b3d1fe2c65e17e.jpg'
import img_two from './assets/d1edb2c7f5788ef66d29025d682d894f.jpg'
import img_three from './assets/f35d6c7d37d8272314e2b2264d204483.jpg'
import styles from './TaskFour.module.css'

const imgPathArr = [img_one, img_two, img_three]

export const TaskFour = () => {
    const [currImgIndex, setCurrImgIndex] = useState<number>(0)  
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined)  
    const [isPause, setIsPause] = useState<boolean | 'idle'>(false)
    
    const slideShowPause = () => {
        console.log('slideShowPause: ', intervalId);        
        clearInterval(intervalId)
        setIntervalId(undefined)
        setIsPause(true)
    }

    const slideShowResume = () => {
        createSlideShow()
        setIsPause(false)
    }

    const nextSlide = () => {
        if (intervalId) {            
            clearInterval(intervalId)
            setIntervalId(undefined)
            setIsPause(true)
        }

        let next = currImgIndex + 1
        if (next === imgPathArr.length) {
            next = 0
        }

        setCurrImgIndex(next)
    }

    const prevSlide = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(undefined)
            setIsPause(true)
        }

        let prev = currImgIndex - 1
        if (prev === -1) {
            prev = imgPathArr.length - 1
        }

        setCurrImgIndex(prev)
    }

    const createSlideShow = () => {
        const id = setInterval(() => {
            setCurrImgIndex(prev => {                
                const next = prev + 1 
                            
                if (next === imgPathArr.length) {
                    return 0
                } else {
                    return next
                }
            })
        }, 1000)

        setIntervalId(id)

        return () => {
            clearInterval(id);
        };
    }

    useEffect(() => {
        return createSlideShow()        
    }, [])
    
    console.log(intervalId);

    return (
        <div>
            <div>
                <img className={styles.img} src={imgPathArr[currImgIndex]} alt="" />                
            </div>
            <div>
                <button onClick={prevSlide}>Назад</button>
                {isPause ? <button onClick={slideShowResume}>Возобновить</button> : <button onClick={slideShowPause}>Пауза</button> }
                <button onClick={nextSlide}>Вперед</button>
            </div>                        
        </div>
    );
};


//? Задача 4: Слайд-шоу изображений
//? Цель: Галерея, которая автоматически переключает изображения каждые 3 секунды.

//TODO: Кнопки "Вперед", "Назад", "Пауза"

//TODO: Автопереход между изображениями

//TODO: При ручном переключении сбрасывать автопереход

//* Сложные моменты:

//* Как синхронизировать ручное и автоматическое переключение?

//* Что происходит с интервалом при паузе?