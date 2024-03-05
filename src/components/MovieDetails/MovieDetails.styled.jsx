import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 1440px;
  padding: 32px 15px;
`;

export const MovieCard = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const PosterWrapper = styled.div`
  display: block;
  width: 328px;
  height: auto;
  object-fit: cover;
`;
export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Description = styled.div`
  padding-left: 32px;
  max-width: 900px;
`;

export const MovieTitle = styled.h1`
  margin-top: 24px;
  font-size: 32px;
`;
export const DescrTitle = styled.h3`
  margin-top: 24px;
  font-size: 20px;
`;

export const Text = styled.p`
  margin-top: 14px;
  color: #fcfcfcb7;
`;

export const TextDate = styled(Text)`
  margin-top: 24px;
`;

export const AddInfoWrapper = styled(MainInfoWrapper)`
  padding-top: 36px;
  border-top: 1px solid rgb(253, 81, 3);
  align-items: center;
`;

export const SubTitle = styled.h2`
  margin-right: 16px;
  font-size: 24px;
`;
export const AddInfoLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-right: 16px;
  padding: 10px 16px;
  font-size: 18px;
  color: #fcfcfc;
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 8px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    transform: scale(1.03);
    border: 1px solid #fd5103;
    box-shadow: rgb(253, 81, 3) 0px 0px 5px 2px;
  }
`;
