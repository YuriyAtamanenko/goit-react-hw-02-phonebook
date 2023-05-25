import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  text-align: center;

  font-size: 16px;
  font-weight: 500;
`;

export const Submit = styled.button`
  margin-top: 20px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  background-color: #b5b5b5;
  border: none;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: #888888;
  }
`;
