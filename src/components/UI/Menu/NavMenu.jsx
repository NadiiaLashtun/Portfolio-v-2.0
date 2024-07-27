import NavItem from "./NavItem";
function NavMenu() {
  return (
    <div className='flex justify-end gap-9 transition'>
      <NavItem caption='About me' />
      <NavItem caption='Skills' />
      <NavItem caption='Portfolio' />
      <NavItem caption='Contacts' />
    </div>
  );
}

export default NavMenu;
