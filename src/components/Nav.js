import { Link } from 'react-router-dom'

function Nav() {
    return (
      <header className='header'>
          <h1>React Playlist!</h1>
          <nav className='header__nav'>
              <ul className='header__list'> 
                  <Link className="header__item" to="/playlist">
                    <li>Home</li>
                  </Link>
                  <Link className="header__item" to="/about">
                    <li>About</li>
                  </Link>
                  <Link className="header__item" to="/contact">
                    <li>Contact</li>
                  </Link>
              </ul>
          </nav>
      </header>
    );
  }
  
  export default Nav;