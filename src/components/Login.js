import React from 'react';
import vector from "../images/Vector.svg";
import { withRouter } from 'react-router-dom';


function Login(props){
    const emailInput = React.useRef();
    const passwordInput = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onLogIn(passwordInput.current.value,emailInput.current.value)
    };
        return (
            <div className="form">
                <header className="header">
                    <img src={vector} className="header__logo" alt="Место"/>
                    <a href={'/sign-up'} className={'header__link'}>Регистрация</a>
                </header>
                <main>
                    <form className={"form__registration"}>
                        <h1 className={'form__name'}>Вход</h1>
                        <input  ref={emailInput} className={'form__input'} type={"email"} placeholder={'Email'} />
                        <input  ref={passwordInput} className={'form__input'} type={"password"} placeholder={'Пароль'} />
                        <input onClick={handleSubmit} className={'form__submit'} type={"submit"} value={'Войти'}></input>
                    </form>

                </main>
                <footer className={'footer'}></footer>
            </div>
        )
}
export default Login;