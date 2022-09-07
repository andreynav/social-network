import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App-wrapper'>
            <header className="App-header">
                <div className='logo'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className='title'>
                    REACT NETWORK
                </div>
            </header>
            <nav className='App-nav'>
                <div>
                    <a href='/profile'>Profile</a>
                </div>
                <div>
                    <a href='/massages'>Messages</a>
                </div>
                <div>
                    <a href='/news'>News</a>
                </div>
                <div>
                    <a href='/music'>Music</a>
                </div>
                <div>
                    <a href='/settings'>Settings</a>
                </div>
            </nav>
            <main className='App-main'>
                <div className="App-main-background">
                    <img src='' alt="background"/>
                </div>
                <div className="App-main-user-info">
                    <div className="App-main-avatar">
                        avatar
                    </div>
                    <div className="App-main-info">
                        info
                    </div>
                </div>
                <div className='App-main-posts'>
                    <div className='App-main-posts-title'>My Posts</div>
                    <div className='App-main-posts-input'>
                        <input/>
                    </div>
                    <div className='App-main-posts-posts'>
                        <div>Post 1</div>
                        <div>Post 2</div>
                        <div>Post 3</div>
                        <div>Post 4</div>
                    </div>
                </div>
            </main>
            <footer className='App-footer'>
                <div>
                    <a>Email</a>
                </div>
                <div>
                    <a>Phone</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
