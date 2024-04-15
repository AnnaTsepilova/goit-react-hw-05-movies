import styled from 'styled-components';

export const CastCard = styled.li`
  width: 200px;

  overflow: hidden;
  outline: none;
`;

export const PosterWrapper = styled.div`
  display: block;
  width: 150px;
  height: auto;
  object-fit: cover;
`;
export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Description = styled.div`
  min-height: 100px;
`;

export const CastName = styled.h3`
  margin-top: 24px;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  color: #fcfcfcb7;
`;
