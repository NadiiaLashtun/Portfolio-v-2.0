import NavItem from "./NavItem";
import Burger from "/src/assets/menu-button.svg?react";

function NavMenu() {
  return (
    <>
      <div className='hidden md:flex justify-end gap-9 transition '>
        <NavItem caption='About me' link='#about-page' />
        <NavItem caption='Skills' link='#skills-page' />
        <NavItem caption='Portfolio' link='#portfolio-page' />
        <NavItem caption='Contacts' link='#contacts-page' />
      </div>
      <div className='flex justify-end md:hidden'>
        <Burger
          className={`w-full h-full text-orange-400 hover:text-lime-500 transition-colors duration-300`}
        />
      </div>
    </>
  );
}

export default NavMenu;
