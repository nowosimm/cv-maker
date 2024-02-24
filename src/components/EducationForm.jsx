import { Input } from "./Input"
import { AddAndRemoveButtons } from "./AddAndRemoveButtons"

export function EducationForm({educationInfo, setEducationInfo}) {
    return (
      <div className='input__Container'>
        <label>School <Input value={educationInfo.school} setData={setEducationInfo('school')}/></label>
        <label>Degree <Input value={educationInfo.degree} setData={setEducationInfo('degree')}/></label>
        <label>Start Date <Input value={educationInfo.startDate} setData={setEducationInfo('startDate')} /></label>
        <label>End Date <Input value={educationInfo.endDate} setData={setEducationInfo('endDate')}/></label>
        <label>Location <Input value={educationInfo.location} setData={setEducationInfo('location')}/></label>
        <AddAndRemoveButtons />
      </div>
    )
  };