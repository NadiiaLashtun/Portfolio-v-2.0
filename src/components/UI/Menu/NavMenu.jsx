import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import Menu from '../../data/MenuInfo';
import MobileMenu from './MobileMenu';

function NavMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  //Block page scroll
  useEffect(() => {
    if (openMobileMenu) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [openMobileMenu]);

  return (
    <>
      <div className='hidden md:flex justify-end gap-9 transition '>
        {/* Menu */}
        {Menu.map((item, index) => (
          <NavItem
            key={index}
            caption={item.caption}
            link={item.link}
          />
        ))}
      </div>

      {/* Burger */}
      <div className='flex justify-end md:hidden'>
        <button
          className={`relative w-8 h-6 flex justify-end items-center transition-colors duration-500 z-40 group
                      before:absolute before:top-0 before:right-0 before:w-8 before:h-[3px] before:bg-text-color before:rounded-lg before:transition-all before:duration-500 before:origin-top-right hover:before:bg-brand-color 
                      after:absolute after:bottom-0 after:right-0 after:w-4 after:h-[3px] after:bg-text-color after:rounded-lg after:transition-all after:duration-500 after:origin-bottom-right hover:after:bg-brand-color    ${
                        openMobileMenu
                          ? 'before:-rotate-45 before:top-0 after:w-8 after:rotate-45'
                          : ''
                      }
                    `}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <span
            className={`w-6 h-[3px] bg-text-color rounded-lg transition-all duration-500 group-hover:bg-brand-color  ${
              openMobileMenu ? 'scale-0' : ''
            }`}
          ></span>
        </button>
        <MobileMenu
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        />
      </div>
    </>
  );
}

export default NavMenu;
