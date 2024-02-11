import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-yellow border-primary-500'
    : 'text-yellow-600 border-slate-600 hover:border-yellow';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
