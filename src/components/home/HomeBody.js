import classes from './HomeBody.module.css';
import homeImage from '../general/images/homeImg.png';



function HomeBody() {
    return (
        <div className={classes.container}>
            <div className={classes.textContainer}>

                <div className={classes.title}>
                    <h1>.auradeity</h1>
                </div>
            </div>
            <div className={classes.homeImg}>
                <img src={homeImage} />
            </div>
        </div>
    );


}

export default HomeBody;