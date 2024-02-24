import { DropDownButton } from "./DropDownButton";
import { EducationForm } from "./EducationForm";
import { PersonalDetailForm } from "./PersonalDetailForm";
import { ExperienceForm } from './ExperienceForm';

export function InputSideBar({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo }) {
    return (
        <div>
            <DropDownButton text='Personal Information'>
                <PersonalDetailForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            </DropDownButton>
            <DropDownButton text='Education'>
                <EducationForm educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
            </DropDownButton>
            <DropDownButton text='Experience'>
                <ExperienceForm experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
            </DropDownButton>     
        </div>
    )
}


