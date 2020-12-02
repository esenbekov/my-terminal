import React from 'react';
import mod from './Catalog.module.css';


const Catalog = () => {
    return(
        <div className={mod.catalog}>
            <link rel='stylesheet' a href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <div className={mod.name}>
                <div className={mod.img}>
                    <img src='https://i.pinimg.com/originals/a6/f0/89/a6f089c3ad682858d8d9626d12d6c9a6.jpg'/>
                </div>
                <div className={mod.text}>
                    сотовая связь и городский телефон
                </div>
            </div>

            <div className={mod.search}>
                <table className={mod.container}>
                    <tr>
                        <td>
                            <input type="text" placeholder="Поиск" className={mod.srch}/>

                        </td>

                        <td>
                            <a className={mod.icon} href="#"><i class="material-icons">search</i> </a>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={mod.features}>
                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Catalog;