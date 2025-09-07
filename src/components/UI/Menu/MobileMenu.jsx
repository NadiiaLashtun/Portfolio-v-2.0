import NavItem from './NavItem';
import Menu from '../../data/MenuInfo';

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-black/55 z-30 transition-opacity duration-500 ease-in-out
     ${
       open
         ? 'opacity-100 pointer-events-auto'
         : 'opacity-0 pointer-events-none'
     }`}
      onClick={onClose}
    >
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-1/2 h-full bg-primary-color transform transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className='h-full flex flex-col gap-6 p-6 pt-24 font-semibold'>
          {Menu.map((item, index) => (
            <NavItem
              key={index}
              caption={item.caption}
              link={item.link}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
