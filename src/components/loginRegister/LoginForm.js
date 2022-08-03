import classes from './style/LoginForm.module.css';
import {useRef} from 'react';


function LoginForm(props) {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const user = {
            email: enteredEmail,
            password:enteredPassword,
        };

        //props.onLoginUser(user);
        console.log(user);
    }


    return (
        <div>
            <form id="login" className={classes.inputGroup} onSubmit={submitHandler}>
                <input type="text" className={classes.inputField} placeholder="Email" required ref={emailInputRef}></input>
                <input type="password" className={classes.inputField} placeholder="Password" required ref={passwordInputRef}></input>
                <button type="submit" className={classes.submitBtn} >Login</button>
            </form>
        </div>
    );


}

export default LoginForm;