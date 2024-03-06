import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ebebeb;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;
export const Link = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
  text-decoration: none;

  &.active {
    color: #3470ff;
  }
`;
