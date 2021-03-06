import React from 'react'
import { AffairType } from './HW2';
import s from './Affair.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => props.deleteAffairCallback(id)// need to fix

    return (
        <div className={s.affairBlock}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div>[{props.affair.priority}]</div>
            <SuperButton 
              red
              className={s.btnAffair}
              onClick={()=>deleteCallback(props.affair._id)}>
              X
            </SuperButton>
            {/* <button className={s.btnAffair} onClick={()=>deleteCallback(props.affair._id)}>X</button> */}
        </div>
    )
}

export default Affair
