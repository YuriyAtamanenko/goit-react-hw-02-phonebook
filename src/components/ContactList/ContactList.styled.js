import styled from '@emotion/styled';

export const List = styled.ul`  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
}`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Contact = styled.p`
  margin: 6px 0;
`;
export const Button = styled.button`
  display: flex;
  background-color: white;
  cursor: pointer;
  border: 1px solid #b5b5b5;
  &:hover,
  &:focus {
    background-color: #b5b5b5;
  }
`;
