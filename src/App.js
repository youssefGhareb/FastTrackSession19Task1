import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import PhotoImg from "./icons/photosnap.svg"
import ManageImg from "./icons/manage.svg";
import AccountImg from "./icons/account.svg";
import MyhomeImg from "./icons/myhome.svg";
import LoopImg from "./icons/loop-studios.svg";
import FaceImg from "./icons/faceit.svg";
import ShortlyImg from "./icons/shortly.svg";
import InsureImg from "./icons/insure.svg";
import EyeImg from "./icons/eyecam-co.svg";
import AirImg from "./icons/the-air-filter-company.svg";
import Header from "./icons/header.png";
import { useState } from 'react';
import Jobs from "./components/jobs/Jobs";
import Filter from "./components/filter/Filter";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      Img: PhotoImg,
      company: 'Photosnap',
      post: 'NEW!',
      featured: 'FEATURED',
      jobtitle: 'Senior Frontend Developer',
      time: '1d ago',
      contract: 'Full Time',
      location: 'USA only',
      skill: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      Img: ManageImg,
      company: 'Manage',
      post: 'NEW!',
      featured: 'FEATURED',
      jobtitle: 'Fullstack Developer',
      time: '1d ago',
      contract: 'Part Time',
      location: 'Remote',
      skill: ['Fullstack', 'Midweight', 'Python', 'React'],
    },
    {
      id: 3,
      Img: AccountImg,
      company: 'Account',
      post: 'NEW!',
      jobtitle: 'Junior Frontend Developer',
      time: '2d ago',
      contract: 'Part Time',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    },
    {
      id: 4,
      Img: MyhomeImg,
      company: 'MyHome',
      jobtitle: 'Junior Frontend Developer',
      time: '5d ago',
      contract: 'Contract',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'CSS', 'Javascript'],
    },
    {
      id: 5,
      Img: LoopImg,
      company: 'Loop Studios',
      jobtitle: 'Software Engineer',
      time: '1w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
    },
    {
      id: 6,
      Img: FaceImg,
      company: 'FaceIt',
      jobtitle: 'Junior Backend Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'UK only',
      skill: ['Backend', 'Junior', 'Ruby', 'RoR'],
    },
    {
      id: 7,
      Img: ShortlyImg,
      company: 'Shortly',
      jobtitle: 'Junior Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
    },
    {
      id: 8,
      Img: InsureImg,
      company: 'Insure',
      jobtitle: 'Junior Frontend Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
    },
    {
      id: 9,
      Img: EyeImg,
      company: 'Eyecam Co.',
      jobtitle: 'Full Stack Engineer',
      time: '3w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
    },
    {
      id: 10,
      Img: AirImg,
      company: 'The Air Filter Company',
      jobtitle: 'Front-end Dev',
      time: '1mo ago',
      contract: 'Part Time',
      location: 'Worldwide',
      skill: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
    },
  ]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const onTagClick = (tag) => {
    if (!tagsSelected.includes(tag)) {
      setTagsSelected([...tagsSelected, tag]);
    }
  }
  const resetTags = () => {
    setTagsSelected([]);
  }
  const removeTagFromFilters = (tag) => {
    if (tagsSelected.includes(tag)) {
      const newTags = tagsSelected.filter(selectedTag => selectedTag !== tag);
      setTagsSelected(newTags);
    }
  }

  const getFilterJobs = ()=>{
    const filteredJobs = jobs.filter((job)=>{
      let found = false;
      for(let i=0; i<tagsSelected.length; i++){
        if(job.skill.includes(tagsSelected[i])){
          found = true;
        } else {
          return false;
        }
      }
      return found;
    });
    return filteredJobs;
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={Header} />
      </div>
      <Filter isOpen={tagsSelected.length > 0} tags={tagsSelected} onResetTagsClick={resetTags} onTagRemoveClick={(tag) => { removeTagFromFilters(tag) }} />
      <Jobs jobs={tagsSelected.length > 0 ? getFilterJobs() : jobs} onTagClick={(tag) => {
        onTagClick(tag);
      }} />
    </div>
  );
}

export default App;
