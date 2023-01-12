import styled from 'styled-components';

export const MoviesGalleryWrapper = styled.div`
  max-width: 1440px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 36px;
  padding-bottom: 36px;
  margin-left: auto;
  margin-right: auto;
`;

export const MoviesGalleryContainer = styled.ul`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;

  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;

  list-style: none;
`;

export const Title = styled.h1`
  margin-bottom: 36px;
  font-size: 32px;
`;
