'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Work Away',
    description: 'Este proyecto presenta una solución innovadora diseñada para facilitar el trabajo remoto.',
    image: '/images/i-img-6.png',
    tag: ['All', 'Web'],
    previewUrl: "https://workaway.vercel.app/",
  },
  {
    id: 2,
    title: 'Banquetes Gadol',
    description: 'El proyecto de banquetería en Ciudad de México brinda soluciones integrales para eventos excepcionales. ',
    image: '/images/i-img-2.png',
    tag: ['All', 'Web'],
    previewUrl: "/",
  },
  {
    id: 3,
    title: 'Trainning Max Gym',
    description: 'Comienza una nueva vida hoy en nuestro gimnasio. Inicia tu camino hacia una vida saludable con nosotros.',
    image: '/images/i-img-4.png',
    tag: ['All', 'Web'],
    previewUrl: "https://trainning-max-gym.vercel.app/",
  },
  {
    id: 4,
    title: 'A-Qlim',
    description: 'Nuestra app del clima, esencial para anticiparte a las condiciones atmosféricas.',
    image: '/images/i-img-5.png',
    tag: ['All', 'Web'],
    previewUrl: "https://a-qlim.netlify.app/",
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Nuestros proyectos
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;