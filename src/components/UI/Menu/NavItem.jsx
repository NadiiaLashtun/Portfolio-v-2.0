import { HashLink } from 'react-router-hash-link';

function NavItem({ caption, link }) {
  return (
    <HashLink
      className='duration-500 hover:text-brand-color'
      to={link}
    >
      {caption}
    </HashLink>
  );
}

export default NavItem;
