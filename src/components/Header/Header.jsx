import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <a href="#">
          <div className='header-left'>
            <img src={'../public/logo.png'}
              alt="logo" 
              className='logo-img'
              />
            <p className='logo-text'>codeworld</p>
          </div>
        </a>

        <nav className='header-mid'>
            <a href="#">Haqqımızda</a>
            <a href="#">İxtisaslar</a>
            <a href="#">Təqaüdlər</a>
            <a href="#">Əlaqə</a>
        </nav>
        
        <button className='header-right-button'>Qeydiyyat</button>

         {/* Hamburger Icon only appears in mobile screens*/}
        <img
          src="../hamburger-icon.png"
          alt="hamburger-icon"
          className='hamburger-icon'  
        />
    </header>
  )
}

export default Header;