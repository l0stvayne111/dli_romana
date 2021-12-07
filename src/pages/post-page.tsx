import React, {useState} from 'react';
import Modal from './../components/modal';

import axios from 'axios';

const PostPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isData, setIsData] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);


    const handleOnChecked = (event:React.FormEvent<HTMLInputElement>) => {
        setIsChecked(event.currentTarget.checked)
    }

    const handleOnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const handleOnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const postFirstAPI = () => {
        axios.post(`http://localhost:8000/api/v1/users/`, {email, password})
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
    }

    const postLastAPI = () => {
        axios.post(`http://localhost:8000/api/v1/users/`, {email, password})
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        postFirstAPI();
        setIsModal(true);
        setIsData(true);
        isChecked ? alert('Отправка на API#2') : '';
    }
    return (
        <>
            <section>
                <div className={'imgBx'}/>
                <div className={`contentBx`}>
                    <div className="formBx">
                        <h2>Отправка данных</h2>
                        <form action="" onSubmit={event => handleOnSubmit(event)}>
                            <div className={`inputBx`}>
                                <span>E-mail</span>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder={`Введите E-mail`}
                                    onInput={event => handleOnChangeEmail(event)}
                                    required
                                />
                            </div>
                            <div className={`inputBx`}>
                                <span>Password</span>
                                <input
                                    type="password"
                                    value={password}
                                    placeholder={`Введите пароль`}
                                    onInput={event => handleOnChangePassword(event)}
                                    required
                                />
                            </div>
                            <div className={`remember`}>
                                <label>
                                    <input
                                        checked={isChecked}
                                        type="checkbox"
                                        onChange={event => handleOnChecked(event)}
                                    />
                                    <span className={'mask'}/>
                                    <span className={`remember-text`}>Отправить данные на API#2</span>
                                </label>
                            </div>
                            <div className={`inputBx`}>
                                <input type="submit" value={`Отправить`}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Modal
                text={isData ? 'Данные отправлены успешно :)' : 'Произошла ошибка :('}
                setStatus={() => setIsModal(false)}
                status={isModal}/>
        </>
    );
};

export default PostPage;
