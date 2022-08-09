import HomeBody from '../components/home/HomeBody';
import MainNavigation from '../components/general/MainNavigation';
import classes from '../components/home/HomeBody.module.css';




function HomePage() {
    return (
        <div className={classes.background}>
            <MainNavigation actionTitle='Login' />
            <div>
                <HomeBody />
            </div>
           
            
        </div>
    );
}

export default HomePage;