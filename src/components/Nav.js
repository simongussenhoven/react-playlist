function Nav() {
    return (
      <header className='header'>
          <h1>React Playlist!</h1>
          <nav className='header__nav'>
              <ul className='header__list'> 
                  <li className="header__item">Home</li>
                  <li className="header__item">About</li>
              </ul>
          </nav>
      </header>
    );
  }
  
  export default Nav;