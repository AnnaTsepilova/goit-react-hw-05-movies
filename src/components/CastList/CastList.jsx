import PropTypes from 'prop-types';

import { CastListContainer } from 'components/CastList/CastList.styled';
import CastItem from 'components/CastItem/CastItem';

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
