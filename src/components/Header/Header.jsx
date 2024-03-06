import { HeaderBar, Link, Nav } from './Header.styled';

function Header() {
  return (
    <>
      <HeaderBar>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="favorite"> Favorite</Link>
        </Nav>
      </HeaderBar>
    </>
  );
}

export default Header;
