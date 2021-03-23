import './sass/main.scss';
import Logo from './sass/img/fake_logo.png';
import icon from './sass/img/icon.png';

function Inae() {
  return (
    <div className="App">
      <header className="App-header">
          <nav className="nav-bar">
            <img src={Logo} className="nav-logo" />
            <div className="search">
                <input type="search" placeholder="Search your city, Find your beer!!" className="search-input"></input>
                <button>SEARCH</button>    
            </div>
            <div className="burger-menu">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
          </nav>
      </header>
        <div className="temp-main">
            <h2 className="temp-main-cityname">Vancouver</h2>
            <div className="temp-main-large">
                <img src={icon} className="temp-icon-large" />
                <h1 className="temp-large">24</h1>
                <h2 className="temp-c-small">℃</h2>
            </div>
        </div>
        <div className="beer-wave-all">
            <div className="beer-waves">            
            </div>
            <div className="beer-waves1">            
            </div>

        </div>

    </div>
  );
}

export default Inae;
