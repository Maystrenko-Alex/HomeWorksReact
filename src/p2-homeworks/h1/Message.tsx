import s from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.messageAva} src={props.avatar} alt={'ava img'}/>
            <div className={s.messageBlockCorner}></div>
            <div className={s.messageBlock}>
                <div className={s.messageBlockName}>{props.name}</div>
                <div className={s.messageBlockText}>{props.message}</div>
                <div className={s.messageBlockTime}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message
