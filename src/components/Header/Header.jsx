import { AppBar, Link, Nav } from './Header.styled';

function Header() {
  return (
    <>
      <AppBar>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="favorite"> Favorite</Link>
        </Nav>
      </AppBar>
    </>
  );
}

export default Header;
