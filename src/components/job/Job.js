import React from 'react';
import "./Job.scss";

const Job = ({ jobData, onTagClick }) => {
    return (
        <div className={`Job shadow rounded ${jobData.featured ? "featured-border" : ""}`}>
            <div className="row align-items-center">
                <div className="col-2">
                    <div className="Job-imgCont">
                        <img src={jobData.Img} className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="Job-companyGroup">
                        <div className="Job-companyGroup-companyTitle">
                            {jobData.company}
                        </div>
                        <div className="Job-companyGroup-jobTags">
                            {jobData.post && <div className="Job-companyGroup-jobTags-new Job-companyGroup-jobTags-tag">{jobData.post}</div>}

                            {jobData.featured && <div className="Job-companyGroup-jobTags-featured Job-companyGroup-jobTags-tag">{jobData.featured}</div>}
                        </div>
                        
                    </div>
                    <div className="Job-title">
                        {jobData.jobtitle}
                    </div>
                    <div className="Job-info">
                        <div className="Job-info-item">{jobData.time}</div>
                        <div className="Job-info-item">{jobData.contract}</div>
                        <div className="Job-info-item">{jobData.location}</div>
                    </div>
                </div>
                <div className="col-md-5 justify-content-end">
                    <ul className="Job-skills">
                        {jobData.skill.map((skill) => <li onClick={()=>{
                            onTagClick(skill);
                        }}>{skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Job;