import styled from 'styled-components';

export const CastListContainer = styled.ul`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 36px;
  max-width: 1440px;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;

  list-style: none;
`;
