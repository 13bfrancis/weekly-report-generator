import React, { useState } from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import PrimaryButton from './components/PrimaryButton';
import Paper from './components/Paper';
import Section from './components/Section/Section';
import SectionHeading from './components/Section/SectionHeading';
import ProjectInput from './components/ProjectInput';
import AddButton from './components/AddButton';
import Details from './components/Section/Details';

const Header = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin: 0.5rem;
`;

function App() {
  const [projects, setProjects] = useState(['']);
  const [projectsDetails, setProjectsDetails] = useState([
    { status: '', forecast: '', progress: '' }
  ]);

  const downloadFile = () => {
    const filename =
      'reportFrom-' + new Date().toLocaleDateString().replace(/\//g, '-');
    let txtFile = 'Current Projects';
    projects.forEach(project => {
      txtFile += `\n\t⦾ ${project}`;
    });
    txtFile += '\n';
    projectsDetails.forEach((detail, i) => {
      txtFile += `\n\t${projects[i]} details: `;
      txtFile += detail.progress && `\n\t\t• Progress: ${detail.progress}`;
      txtFile += detail.status && `\n\t\t• Status: ${detail.status}`;
      txtFile += detail.forecast && `\n\t\t• Forecast ${detail.forecast}`;
    });
    const blob = new Blob([txtFile], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, `${filename}.txt`);
  };

  const changeItem = (index, val) => {
    let updatedProjects = [];
    projects.forEach((project, i) => {
      if (i === index) {
        updatedProjects.push(val);
      } else {
        updatedProjects.push(project);
      }
    });
    setProjects(updatedProjects);
  };

  const deleteProject = index => {
    let newProjects = [...projects];
    let newDetails = [...projectsDetails];
    newProjects = newProjects.filter((_, i) => i !== index);
    newDetails = newDetails.filter((_, i) => i !== index);
    setProjectsDetails(newDetails);
    setProjects(newProjects);
  };

  const setStatus = (index, value) => {
    let updatedStatus = [];

    projectsDetails.forEach((item, i) => {
      if (i === index) {
        updatedStatus.push({
          status: value,
          forecast: item.forecast,
          progress: item.progress
        });
      } else {
        updatedStatus.push({ ...item });
      }
    });

    setProjectsDetails(updatedStatus);
  };

  const setForecast = (index, value) => {
    let updatedForecast = [];

    projectsDetails.forEach((item, i) => {
      if (i === index) {
        updatedForecast.push({
          status: item.status,
          forecast: value,
          progress: item.progress
        });
      } else {
        updatedForecast.push({ ...item });
      }
    });
    setProjectsDetails(updatedForecast);
  };

  const setProgress = (index, value) => {
    let updatedProgress = [];

    projectsDetails.forEach((item, i) => {
      if (i === index) {
        updatedProgress.push({
          status: item.status,
          forecast: item.forecast,
          progress: value
        });
      } else {
        updatedProgress.push({ ...item });
      }
    });
    setProjectsDetails(updatedProgress);
  };

  return (
    <div className="App">
      <Header>Weekly Status Report Generator</Header>
      <Paper>
        <PrimaryButton onClick={downloadFile}>Generate File</PrimaryButton>
        <Section>
          <SectionHeading>Current Projects</SectionHeading>
          {projects.map((project, i) => (
            <ProjectInput
              label="Enter Project Name"
              key={i}
              changeItem={changeItem}
              deleteProject={deleteProject}
              index={i}
              value={project}
            />
          ))}
          <AddButton
            onClick={() => {
              setProjects([...projects, '']);
              setProjectsDetails([
                ...projectsDetails,
                { status: '', forecast: '', progress: '' }
              ]);
            }}
          >
            Add Project
          </AddButton>
        </Section>
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            {project.length > 0 && (
              <Section>
                <SectionHeading>{project}</SectionHeading>
                <Details
                  index={i}
                  setForecast={setForecast}
                  setStatus={setStatus}
                  setProgress={setProgress}
                  statusValue={projectsDetails[i].status}
                  forecastValue={projectsDetails[i].forecast}
                  progressValue={projectsDetails[i].progress}
                />
              </Section>
            )}
          </React.Fragment>
        ))}
      </Paper>
    </div>
  );
}

export default App;
