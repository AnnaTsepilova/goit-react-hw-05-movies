import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from 'components/Loader/Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fd5103"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
