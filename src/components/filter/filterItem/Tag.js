import React from 'react'
import "./Tag.scss";
import imgIcon from"../../../icons/closeIcon.svg";
import { BsXLg } from "react-icons/bs";


const Tag = ({ skill, onRemoveClick }) => {
  return (
    <div className='Tag'>
        <div className="Tag-skill">
              {skill}
        </div>
          <div className="Tag-remove" onClick={onRemoveClick}>
              <BsXLg />
        </div>
    </div>
  )
}

export default Tag;