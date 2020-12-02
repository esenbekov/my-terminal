import  React from "react";
import mod from "./FavoriteFeatures.module.css";

const FavoriteFeatures = ()=> {
    return (
        <div className='container'>
            <div className={mod.features}>

                <div className={mod.item}>
                    <img src="https://pay24.asia/assets/img/asisnur-w-og.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://pbs.twimg.com/profile_images/1289018108435456002/XpUhusba.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://knews.kg/wp-content/uploads/2015/12/24544_w300_h207_crop-300x207.jpg" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwng3LVAmZ4hgfk0KF6vdCNjIo3LdZ__YYyzt5nz7zA=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://valuta.kg/uploads/c/cbkbank/avat_cbk_4c567.png" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnTRVrFacbjAkCkNRU0Ec0NUSLzXp2G3uFQ&usqp=CAU" alt=""/>
                </div>

                <div className={mod.item}>
                    <img src="https://image.opencart.com/cache/5d77a5e57ad7b-resize-710x380.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default FavoriteFeatures;