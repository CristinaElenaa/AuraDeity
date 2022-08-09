import MainNavigation from "../components/general/MainNavigation";
import SearchBar from "../components/general/SearchBar";


function WeatherPage() {

    return (
        <div>
            <MainNavigation actionTitle='Account' />
            <SearchBar />
        </div>
    );
}

export default WeatherPage;