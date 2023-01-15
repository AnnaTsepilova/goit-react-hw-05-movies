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
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 14px 10px;
  border-radius: 8px;

  color: #fcfcfc;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #fd5103;
    border: 1px solid rgb(253, 81, 3);
    box-shadow: rgb(253 81 3) 0px 0px 5px 2px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fe7031;
  }
`;
