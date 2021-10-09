import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";
import '../components/Home.modules.css';

const Home = (props) => {
    return (
        <div className="flex-home">
                <HomeTop/>
                <HomeBottom/>
        </div>
    )
}

export default Home;