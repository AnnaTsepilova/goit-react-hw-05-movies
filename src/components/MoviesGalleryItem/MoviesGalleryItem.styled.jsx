import styled from 'styled-components';

export const MoviesGalleryCard = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    border: 1px solid rgb(253, 81, 3);
    box-shadow: 0px 1px 3px 0px rgb(253, 81, 3), 0px 1px 3px 0px rgb(253, 81, 3),
      0px 1px 3px 0px rgb(253, 81, 3), 0px 1px 3px 0px rgb(253, 81, 3);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Description = styled.div`
  padding: 0 24px;
  height: 150px;
`;

export const MovieTitle = styled.h2`
  margin-top: 24px;
  min-height: 60px;

  font-size: 24px;
  font-weight: 500;
`;

export const MovieDateRelease = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;

  font-size: 16px;
  font-weight: 400;
`;
