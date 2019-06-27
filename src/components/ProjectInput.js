import React from 'react';
import styled from 'styled-components';

const ProjectBox = styled.div`
  display: flex;
  margin: 0.5rem 0;
  justify-content: center;
`;
const DelButton = styled.button`
  cursor: pointer;
  border: none;
`;
const ProjectField = styled.input`
  width: 100%;
  font-size: 1rem;
`;

const ProjectInput = ({ label, index, value, changeItem, deleteProject }) => (
  <ProjectBox>
    <ProjectField
      placeholder={label}
      type="text"
      value={value}
      onChange={e => {
        changeItem(index, e.target.value);
      }}
      key={index}
    />
    <DelButton
      onClick={() => {
        deleteProject(index);
      }}
    >
      <i className="fas fa-trash" />
    </DelButton>
  </ProjectBox>
);

export default ProjectInput;
