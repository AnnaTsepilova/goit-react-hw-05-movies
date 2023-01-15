import { BackLink } from 'components/BackLink/BackLink.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export default function ButtonGoBack() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <BackLink to={backLinkHref}>
      <HiArrowNarrowLeft
        style={{ width: '1.3em', height: '1.3em', marginRight: '8px' }}
      />
      Go back
    </BackLink>
  );
}
