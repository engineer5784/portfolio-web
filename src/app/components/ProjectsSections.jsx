import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'Work Away',
        description: 'descripción del proyecto',
        image: '/images/i-img-1.png',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: 'Experiencias Gadol',
        description: 'descripción del proyecto',
        image: '/images/i-img-2.png',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'Trainning Max Gym',
        description: 'descripción del proyecto',
        image: '/images/i-img-4.png',
        tag: ['All', 'Web']
    }
]

const ProjectsSections = () => {
  return (
    <>
    <h2 className='text-center text-4xl  font-bold text-white mt-4  mb-8 md:mb-12'>Nuestros Proyectos</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}</div>      
    </>
  )
}

export default ProjectsSections;
