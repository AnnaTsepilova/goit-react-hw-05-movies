import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;

  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;

  margin-right: 16px;
  padding: 8px 16px;

  width: 140px;

  text-decoration: none;

  font-size: 18px;
  color: #fcfcfc;
  background-color: #202025;

  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 8px;

  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    border: 1px solid rgb(253, 81, 3);
    box-shadow: rgb(253, 81, 3) 0px 0px 5px 2px;
  }
`;
