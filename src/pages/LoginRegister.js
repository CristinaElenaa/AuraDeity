import MainNavigation from '../components/general/MainNavigation';
import LoginRegisterBody from '../components/loginRegister/LoginRegisterBody';

function LoginRegisterPage() {
    return (
        <div>
            <MainNavigation actionTitle='Login'/>
            <div>
                <LoginRegisterBody />
            </div>
        </div>
    );
}

export default LoginRegisterPage;