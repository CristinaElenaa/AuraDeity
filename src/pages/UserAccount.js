import MainNavigation from "../components/general/MainNavigation";
import classes from '../components/loginRegister/style/LoginForm.module.css';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';


function UserAccountPage() {

    const [isLogged, setIsLogged] =useState(true);
    const history= useHistory();

    function logoutUserHandler(user){
        localStorage.removeItem('token-info');
        setIsLogged(false);
        history.replace('/');
    }


    return (
        <div>
            <MainNavigation actionTitle='LogOut' />
            <div>This is the account page!</div>
            <button type="submit" className={classes.submitBtn} onClick={logoutUserHandler}>Logout</button>
        </div>
    );
}

export default UserAccountPage;