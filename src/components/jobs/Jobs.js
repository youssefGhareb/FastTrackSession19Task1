import React from 'react'
import Job from '../job/Job'
import "./Jobs.scss"

const Jobs = ({ jobs, onTagClick }) => {
  console.log(jobs.length);
  return (
    <div className='jobs'>
      <div className="container">
        {jobs.length > 0 ? jobs.map((job) => {
          return <Job jobData={job} onTagClick={onTagClick} />
        }) : ""}
      </div>
    </div>
  )
}

export default Jobs