import { useState, useEffect } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/projects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      const fetchedData = responseData.data;
      setProjects(fetchedData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div>
      <h1>This is the Projects page</h1>
      <ul>
        {projects.map((project) => (
          <div key={ project.id }>
            <li>{ project.attributes.slug }</li>
            <li>{ project.attributes.content }</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Projects;