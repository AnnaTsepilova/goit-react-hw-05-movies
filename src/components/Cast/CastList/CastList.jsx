import PropTypes from 'prop-types';

import { CastListContainer } from 'components/Cast/CastList/CastList.styled';
import CastItem from 'components/Cast/CastItem/CastItem';

export default function CastList({ cast }) {
  return (
    <CastListContainer>
      {cast.map(castInd => (
        <CastItem key={castInd.id} castInd={castInd} />
      ))}
    </CastListContainer>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
