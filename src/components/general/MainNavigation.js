import classes from './MainNavigation.module.css';
import logo from './images/logo1.webp';


function MainNavigation() {
    return <div>
        <div className={classes.header}>

            <div className={classes.logo}>
                <a href={'http://localhost:3000/'}><img src={logo}></img></a>
            </div>
            <div className={classes.nav}>
               <ul>
                <li>
                <a href={'http://localhost:3000/'}>Home</a>
                </li>
               </ul>
            </div>
            <div className={classes.loginBtn}>
                <a href={'http://localhost:3000/login'}>Login</a>
            </div>

        </div>
    </div>
}

export default MainNavigation;