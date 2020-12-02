import React from 'react';
import mod from './Buttons.module.css';

const Button = () => {
    return (<div className={mod.container}>
            <div className={mod.buttons}>
                <div className={mod.btn}>
                    назад
                </div>

                <div className={mod.btn}>
                    поиск
                </div>

                <div className={mod.btn}>
                    Кыргызча
                </div>

            </div>

        </div>
    )
}

export default Button;
