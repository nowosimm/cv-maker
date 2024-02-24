import { Input } from "./Input"
import { AddAndRemoveButtons } from "./AddAndRemoveButtons"

export function ExperienceForm({experienceInfo, setExperienceInfo}) {
    return (
      <div className='input__Container'>
        <label>Company <Input value={experienceInfo.company} setData={setExperienceInfo('company')}/></label>
        <label>Position <Input value={experienceInfo.position} setData={setExperienceInfo('position')}/></label>
        <label>Start Date <Input value={experienceInfo.startDate} setData={setExperienceInfo('startDate')}/></label>
        <label>End Date <Input value={experienceInfo.endDate} setData={setExperienceInfo('endDate')}/></label>
        <label>Location <Input value={experienceInfo.location} setData={setExperienceInfo('location')}/></label>
        <label>Description <Input value={experienceInfo.description} setData={setExperienceInfo('description')}/></label>
        <AddAndRemoveButtons />
     
      </div>
    )
  };
