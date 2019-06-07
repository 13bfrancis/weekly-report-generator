import styled from 'styled-components';

const AddButton = styled.button`
  width: 100%;
  background: grey;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  background: #c4c4c4;
  transition: background linear 0.3s;
  &:hover {
    background: #cdefb8;
  }
`;

export default AddButton;
