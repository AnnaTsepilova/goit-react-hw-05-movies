import styled from 'styled-components';

export const MoviesGalleryContainer = styled.ul`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;

  list-style: none;
`;
