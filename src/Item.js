import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({name, backGround, text}) => {

  return (
    <div
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: "cover",
        }}
      >
      <h1>{name}</h1>
      <p>{text}</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Item;