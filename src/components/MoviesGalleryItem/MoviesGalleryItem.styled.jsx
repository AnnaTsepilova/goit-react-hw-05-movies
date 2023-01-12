import styled from 'styled-components';

export const MoviesGalleryCard = styled.li`
  /* position: relative;
  top: 0;
  left: 0; */
  display: flex;
  flex-wrap: wrap;
  /* align-content: flex-start; */
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;

  width: calc((100vw - 80px - 260px - (30px * 5)) / 5);
  /* max-width: calc(
    (
        var(--maxPrimaryPageWidth) - 80px - 260px -
          (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
      ) / var(--numberOfDiscoverColumns)
  ); */
  /* border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  } */
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
