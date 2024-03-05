import {
  CastCard,
  PosterWrapper,
  Poster,
  Description,
  CastName,
  Text,
} from 'components/CastItem/CastItem.styled';

const CastItem = ({ castInd }) => {
  let castPosterSrc = require('services/no-poster.png');
  if (castInd.profile_path) {
    castPosterSrc = `https://image.tmdb.org/t/p/w500/${castInd.profile_path}`;
  }

  return (
    <CastCard>
      <PosterWrapper>
        <Poster src={castPosterSrc} alt={castInd.name} width={170} />
      </PosterWrapper>
      <Description>
        <CastName>{castInd.name}</CastName>
        <Text>Character: </Text>
        <Text>{castInd.character}</Text>
      </Description>
    </CastCard>
  );
};

export default CastItem;
