function NavItem({ caption, link }) {
  console.log(link);
  return (
    <a className='duration-500 hover:text-brand-color' href={link}>
      {caption}
    </a>
  );
}

export default NavItem;
