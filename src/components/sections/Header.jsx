import Logo from '../../assets/logo.svg';
import NavMenu from '../UI/menu/NavMenu';
import Wrapper from '../Wrapper';

function Header() {
  return (
    <header className='border-b border-black py-0'>
      <Wrapper>
        <nav className='flex justify-between items-center h-16'>
          <a href='/'>
            <img
              src={Logo}
              alt='Logo'
            />
          </a>
          <NavMenu />
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
