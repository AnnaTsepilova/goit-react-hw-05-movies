import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 64px;

  border-bottom: 2px solid #fd5103;
  background-color: #202025;

  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`;

export const NavWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 0 15px;
`;

export const HeadNavList = styled.ul`
  display: flex;

  list-style: none;
`;

export const HeadNavItem = styled.li`
  display: block;
  margin-right: 24px;
`;

export const HeadNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-right: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #fcfcfc;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #fd5103;
  }

  &:hover,
  &:focus {
    color: #fd5103;
  }
`;
