import './styles/App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
    return (
        <div className='appWrapper'>
            <Header />
            <Navbar />
            <div className='contentWrapper'>
                <Profile />
                {/*<Dialogs />*/}
            </div>
            <Footer />
        </div>
    );
}

export default App;
