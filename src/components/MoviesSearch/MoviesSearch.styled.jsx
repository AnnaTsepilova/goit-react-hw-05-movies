import styled from 'styled-components';

export const SearchWrapper = styled.div`
  height: 100%;

  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 36px 15px 0 15px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #202025;
  border-radius: 4px;
  outline: none;
  overflow: hidden;

  border: 1px solid rgb(253, 81, 3);
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-left: 1px solid rgb(253, 81, 3);
  background-color: #202025;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 4px;

  background-color: #202025;
  color: #fcfcfc;

  -webkit-text-fill-color: #fcfcfc;
  -webkit-box-shadow: 0 0 0px 40rem #202025 inset;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.76);
  }

  &:textarea {
    background-color: #202025;
    color: #fcfcfc;
  }
`;
