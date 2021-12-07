import React from 'react';

import style from './modal.module.css';

type modalType = {
    text: string,
    status: boolean,
    setStatus: () => void
}


const Modal:React.FC<modalType> = ({text = '', status = false, setStatus}) => {

    const handleOnClick = (event:any) => {
        if((!event.target.closest(`.modal__body`))){
            setStatus();
        }
    }

    return (
        <div className={`${style.container} ${status ? style.open : ''}`} onClick={event => handleOnClick(event)}>
            <div className={`${style.body} modal__body`}>
                <button className={style.close} type="button" onClick={() => setStatus()}>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                    </svg>
                </button>
                <div className={style.text}>{text}</div>
            </div>
        </div>
    );
};

export default Modal;
