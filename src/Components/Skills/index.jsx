import React from 'react';

function Skills(props) {
  const stars = Array.from({ length: props.stars }, (_, index) => (
    <span key={index}>★ </span> 
  ));

  return (
    <div className="skills">
      <h3>{props.skillname}</h3>
      <div className="etoiles">{stars}</div>
    </div>
  );
}

export default Skills;
