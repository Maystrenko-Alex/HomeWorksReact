import React from 'react';
import s from './../pages/Error404.module.css';

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.rotated}>404</div>
            <div >Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
