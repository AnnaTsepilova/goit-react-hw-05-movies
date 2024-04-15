import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieGalleryCard = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  outline: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    border: 1px solid rgb(253, 81, 3);
    box-shadow: rgb(253, 81, 3) 0px 0px 5px 2px;
  }
`;
export const LinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #fcfcfc;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Description = styled.div`
  position: relative;
  padding: 0 24px;
  min-height: 110px;
`;

export const MovieTitle = styled.h2`
  margin-top: 24px;
  min-height: 60px;

  font-size: 20px;
  font-weight: 500;
`;

export const MovieDateRelease = styled.p`
  position: absolute;
  bottom: 0;
  margin-top: 10px;
  margin-bottom: 20px;

  color: #fcfcfcb7;
`;
