import img_one from './assets/2b37056c5ff75bffe7b3d1fe2c65e17e.jpg'
import img_two from './assets/d1edb2c7f5788ef66d29025d682d894f.jpg'
import img_three from './assets/f35d6c7d37d8272314e2b2264d204483.jpg'

export const TaskFour = () => {
    
    return (
        <div>
            <div>

            </div>
            <div>
                <button>Назад</button>
                <button>Пауза</button>
                <button>Вперед</button>
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