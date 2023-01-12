import styled from 'styled-components';

export const MoviesGalleryContainer = styled.ul`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 24px;
  padding-bottom: 34px;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  margin: auto;
  padding: 20px;
  font-size: 20px;
`;
