import Logo from '../../assets/logo.svg';
import NavMenu from '../UI/menu/NavMenu';

function Header() {
  return (
    <header className='border-b border-black px-[30px] sm:px-[60px]'>
      <nav className='flex justify-between items-center h-16'>
        <a href='/'>
          <img
            src={Logo}
            alt='Logo'
          />
        </a>
        <NavMenu />
      </nav>
    </header>
  );
}

export default Header;
