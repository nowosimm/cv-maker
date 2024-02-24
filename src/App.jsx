import { InputSideBar } from './components/InputSideBar'
import { MakeCV } from './components/cv'
import { useState } from 'react';
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Maddie Nowosielski",
    email:"nowosimm@mail.uc.edu",
    phone:"734-972-320",
    location:"Cincinnati, Ohio",
  });

  const handlePersonalInfoChange = (nameOfProperty) => {
    return (value) => {
      personalInfo[nameOfProperty] = value;
      setPersonalInfo({ ...personalInfo });
    }
  };

  const [educationInfo, setEducationInfo] = useState({
    school: "University of Cincinnati",
    degree:"Bachelors of Science in Fashion Design",
    startDate:"08-2018",
    endDate:"05-2023",
    location:"Cincinnati, Ohio"
  });

  const handleEducationInfoChange = (nameOfProperty) => {
    return (value) => {
      educationInfo[nameOfProperty] = value;
      setEducationInfo({ ...educationInfo });
    }
  };

  const [experienceInfo, setExperienceInfo] = useState({
    company: "NOBULL",
    position: "Apparel Design Intern",
    startDate: "01-2021",
    endDate: "05-2021",
    location: "Boston, MA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });

  const handleExperienceInfoChange = (nameOfProperty) => {
    return (value) => {
      experienceInfo[nameOfProperty] = value;
      setExperienceInfo({ ...experienceInfo });
    }
  };


  return <div className="app__Container">
    <div>
      <InputSideBar 
      personalInfo={personalInfo} setPersonalInfo={handlePersonalInfoChange}
      educationInfo={educationInfo} setEducationInfo={handleEducationInfoChange}
      experienceInfo={experienceInfo} setExperienceInfo={handleExperienceInfoChange} />
    </div>
  <MakeCV 
  personalInfo={personalInfo} 
  educationInfo={educationInfo}
  experienceInfo={experienceInfo} />
  </div>
}

export default App
