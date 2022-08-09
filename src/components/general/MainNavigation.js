import classes from './MainNavigation.module.css';
import logo from './images/logo1.webp';
import {useHistory} from 'react-router-dom';



function MainNavigation(props) {

    const history= useHistory();

function buttonHandler(){
    if(props.actionTitle=='Login')
    {
        history.replace('/login');
    }
    else{
        history.replace('/userAccount');
    }
}

    return <div>
        <div className={classes.header}>

            <div className={classes.logo}>
                <a href={'http://localhost:3000/'}><img src={logo} /></a>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li>
                        <a href={'http://localhost:3000/'}>Home</a>
                    </li>
                </ul>
            </div>
            <div className={classes.loginBtn}>
                <button onClick={buttonHandler}>{props.actionTitle}</button>
            </div>

        </div>
    </div>
}

export default MainNavigation;