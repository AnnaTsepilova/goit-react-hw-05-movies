import { BackLink } from 'components/BackLink/BackLink.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const ButtonGoBack = onClick => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <BackLink to={backLinkHref}>
      <HiArrowNarrowLeft
        style={{ width: '1.3em', height: '1.3em', marginRight: '8px' }}
      />
      Go back
    </BackLink>
  );
};

export default ButtonGoBack;
