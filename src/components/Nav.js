import { Link } from 'react-router-dom'

function Nav() {
    return (
      <header className='header'>
          <h1>React Playlist!</h1>
          <nav className='header__nav'>
              <ul className='header__list'> 
                  <Link to="/playlist">
                    <li className="header__item">Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact</li>
                  </Link>
              </ul>
          </nav>
      </header>
    );
  }
  
  export default Nav;