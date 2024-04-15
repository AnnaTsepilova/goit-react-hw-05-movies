import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 64px;
  border-top: 2px solid #fd5103;
  background-color: #202025;
`;

export const FooterDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 0;

  width: 100%;
`;
export const FooterDataText = styled.p`
  margin-right: 10px;
  font: inherit;

  letter-spacing: 0.03em;

  text-align: center;
  color: #fcfcfc;
`;

export const FooterIcon = styled(BsGithub)`
  margin-left: 5px;
  color: #fd5103;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px #fd5103;
    transform: scale(1.3);
  }
`;
