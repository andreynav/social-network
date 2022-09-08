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
                    <p> 4GEEKS</p>
                </div>
                <div className='login'>
                    <p>Login</p>
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
                    {/*<img src='' alt="background"/>*/}
                </div>
                <div className="App-main-user-info">
                    <div className="App-main-avatar">
                        <p>avatar</p>
                    </div>
                    <div className="App-main-info">
                        <p>Data: ...</p>
                    </div>
                </div>
                <div className='App-main-posts'>
                    <div className='App-main-posts-title'>My Posts</div>
                    <div className='App-main-posts-input'>
                        <textarea />
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
                <div className='email'>
                    <a>Email: nav.testsw@gmail.com</a>
                </div>
                <div className='phone'>
                    <a>Phone: +375 29 6066602</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
