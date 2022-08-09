import classes from './style/LoginRegisterBody.module.css';
import avatar from '../general/images/avatar.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


function LoginRegisterBody() {

    const [isRegistered, setIsRegistered] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    function loginHandler() {
        setIsRegistered(true);
    }

    function registerHandler() {
        setIsRegistered(false);
    }

    function addUserHandler(user) {
        fetch('https://localhost:7224/api/auth/signup',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history.replace('/userAccount');
            });
    }

    function loginUserHandler(user) {
        fetch('https://localhost:7224/api/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                localStorage.setItem('token-info', json.token);
                localStorage.setItem('user-email', user.email);
            })
           
    
    history.replace('/weather');
    setIsLogged(true);

}

return (
    <div className={classes.container}>
        <div className={classes.avatar}>
            <img src={avatar}></img>
        </div>
        <div className={classes.formBox}>
            <div className={classes.buttonBox}>
                <div className={classes.btn}></div>
                <button type="button" className={classes.toggleBtn} onClick={loginHandler}>Login</button>
                <button type="button" className={classes.toggleBtn} onClick={registerHandler}>Register</button>
            </div>
            {isRegistered ? <LoginForm onLoginUser={loginUserHandler} /> : <RegisterForm onAddUser={addUserHandler} />}
        </div>
    </div>
);
}

export default LoginRegisterBody;