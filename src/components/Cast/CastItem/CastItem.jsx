import PropTypes from 'prop-types';
import {
  CastCard,
  PosterWrapper,
  Poster,
  Description,
  CastName,
  Text,
} from 'components/Cast/CastItem/CastItem.styled';

export default function CastItem({ castInd }) {
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
}

CastItem.propTypes = {
  castInd: PropTypes.objectOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ).isRequired,
};
