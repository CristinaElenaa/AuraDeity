import classes from './style/RegisterForm.module.css';
import { useRef } from 'react';

function RegisterForm(props) {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const repeatPasswordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredRepetePassword = repeatPasswordInputRef.current.value;

        const user = {
            email: enteredEmail,
            password:enteredPassword,
            repetePassword: enteredRepetePassword,
        };

        //props.onAddUser(user);
        console.log(user);
    }

    return (
        <div>
            <form id="register" className={classes.inputGroup} onSubmit={submitHandler}>
                <input type="text" className={classes.inputField} placeholder="Email" required ref={emailInputRef}>
                </input>
                <input type="password" className={classes.inputField} placeholder="Password" required ref={passwordInputRef}>
                </input>
                <input type="password" className={classes.inputField} placeholder="Repeat Password" required ref={repeatPasswordInputRef}>
                </input>
                <button type="submit" className={classes.submitBtn} >Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;