import {
  FooterContainer,
  FooterDataWrapper,
  FooterDataText,
  FooterIcon,
} from 'components/Footer/Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDataWrapper>
        <FooterDataText>Copyright © 2024 | Developed by</FooterDataText>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AnnaTsepilova"
        >
          <FooterIcon />
        </a>
      </FooterDataWrapper>
    </FooterContainer>
  );
};

export default Footer;
