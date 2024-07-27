function NavItem({ caption }) {
  return (
    <a className='duration-500 hover:text-brand-color' href='#'>
      {caption}
    </a>
  );
}

export default NavItem;
